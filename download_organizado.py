import os
import csv
import unicodedata
import re
import yt_dlp

# --- Configurações ---
CSV_PATH = 'public/data/videos.csv'
OUTPUT_VIDEO_DIR = 'public/midia/videos'
OUTPUT_THUMB_DIR = 'public/midia/thumbs'

# Garante que as pastas existem
os.makedirs(OUTPUT_VIDEO_DIR, exist_ok=True)
os.makedirs(OUTPUT_THUMB_DIR, exist_ok=True)


# --- Função Slugify (Idêntica ao seu Frontend) ---
def slugify(text):
    if not text: return ""
    # Normaliza para remover acentos
    text = unicodedata.normalize('NFD', text).encode('ascii', 'ignore').decode('utf-8')
    text = text.lower().strip()
    # Remove caracteres especiais (mantém letras, números, espaços e hífens)
    text = re.sub(r'[^\w\s-]', '', text)
    # Substitui espaços e hífens repetidos por um único hífen
    text = re.sub(r'[-\s]+', '-', text)
    return text


# --- Configuração do Download (yt-dlp) ---
def download_team_assets(team_name, video_url):
    slug = slugify(team_name)

    if not slug or not video_url:
        print(f"❌ Dados inválidos para equipe: {team_name}")
        return

    video_filename = f"{slug}.mp4"
    thumb_filename = f"{slug}"  # yt-dlp adiciona a extensão (.jpg/.webp) automaticamente

    print(f"\n⬇️ Processando: {team_name} -> {slug}")

    # Opções para baixar VÍDEO
    ydl_opts_video = {
        'format': 'best[ext=mp4]/best',  # Tenta MP4 primeiro
        'outtmpl': os.path.join(OUTPUT_VIDEO_DIR, f"{slug}.%(ext)s"),
        'quiet': True,
        'no_warnings': True,
        'ignoreerrors': True,
    }

    # Opções para baixar THUMBNAIL
    ydl_opts_thumb = {
        'skip_download': True,  # Não baixa o vídeo
        'writethumbnail': True,  # Baixa a thumb
        'outtmpl': os.path.join(OUTPUT_THUMB_DIR, f"{slug}"),
        'postprocessors': [{
            'key': 'FFmpegThumbnailsConvertor',
            'format': 'jpg',  # Converte para JPG
        }],
        'quiet': True,
        'ignoreerrors': True,
    }

    # 1. Baixar Vídeo
    if os.path.exists(os.path.join(OUTPUT_VIDEO_DIR, video_filename)):
        print(f"   ✅ Vídeo já existe.")
    else:
        try:
            with yt_dlp.YoutubeDL(ydl_opts_video) as ydl:
                ydl.download([video_url])
                print(f"   ✅ Vídeo baixado com sucesso.")
        except Exception as e:
            print(f"   ❌ Erro ao baixar vídeo: {e}")

    # 2. Baixar Thumbnail
    # Verifica se já existe .jpg (ou .webp que o next converte)
    if os.path.exists(os.path.join(OUTPUT_THUMB_DIR, f"{slug}.jpg")):
        print(f"   ✅ Thumbnail já existe.")
    else:
        try:
            with yt_dlp.YoutubeDL(ydl_opts_thumb) as ydl:
                ydl.download([video_url])
                print(f"   ✅ Thumbnail baixada.")
        except Exception as e:
            print(f"   ❌ Erro ao baixar thumbnail: {e}")


# --- Execução Principal ---
def main():
    print("🚀 Iniciando downloads organizados...")

    try:
        with open(CSV_PATH, mode='r', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)

            for row in reader:
                equipe = row.get('equipe')
                url = row.get('video_url')

                if equipe and url:
                    download_team_assets(equipe, url)

    except FileNotFoundError:
        print(f"❌ Erro: Arquivo CSV não encontrado em {CSV_PATH}")
    except Exception as e:
        print(f"❌ Erro geral: {e}")

    print("\n✨ Processo finalizado! Verifique as pastas public/midia.")


if __name__ == "__main__":
    main()