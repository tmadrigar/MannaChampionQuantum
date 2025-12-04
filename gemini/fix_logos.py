import os
import unicodedata
import shutil

# Configuração das pastas
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
LOGOS_DIR = os.path.join(BASE_DIR, 'public', 'logos')

# De/Para manual para garantir nomes curtos e limpos
RENAME_MAP = {
    "1 - UEM.png": "1-uem.png",
    "2 - Fundação Araucária.png": "2-fundacao-araucaria.png",
    "3 - Paraná Governo do Estado.png": "3-parana-governo.png",
    "4 - CNPQ.png": "4-cnpq.png",
    "5 - Softex Núcleo Campinas.png": "5-softex-campinas.png",
    "6 - Softex.png": "6-softex.png",
    "7 - MCTI.png": "7-mcti.png",
    "8 - Governo Federal.png": "8-governo-federal.png",
    "Imagem1.png": "logo-manna-champion.png",
    "logo_manna.png": "logo-manna.png"
}

def normalize_filename(filename):
    # Remove acentos
    nfkd_form = unicodedata.normalize('NFKD', filename)
    filename = "".join([c for c in nfkd_form if not unicodedata.combining(c)])
    # Minusculo e troca espaço por hifen
    return filename.lower().replace(' ', '-')

def main():
    print(f"📂 Processando pasta: {LOGOS_DIR}")
    
    if not os.path.exists(LOGOS_DIR):
        print("❌ Pasta public/logos não encontrada!")
        return

    count = 0
    for old_name in os.listdir(LOGOS_DIR):
        if old_name in RENAME_MAP:
            new_name = RENAME_MAP[old_name]
            old_path = os.path.join(LOGOS_DIR, old_name)
            new_path = os.path.join(LOGOS_DIR, new_name)
            
            # Renomeia
            if old_name != new_name:
                shutil.move(old_path, new_path)
                print(f"✅ Renomeado: '{old_name}' -> '{new_name}'")
                count += 1
        else:
            # Se for um arquivo que não está no mapa, mas tem espaços/acentos, normaliza
            if ' ' in old_name or any(ord(char) > 127 for char in old_name):
                new_name = normalize_filename(old_name)
                if old_name != new_name:
                    old_path = os.path.join(LOGOS_DIR, old_name)
                    new_path = os.path.join(LOGOS_DIR, new_name)
                    shutil.move(old_path, new_path)
                    print(f"wm Renomeado (Auto): '{old_name}' -> '{new_name}'")
                    count += 1

    print(f"\n✨ Concluído! {count} arquivos renomeados.")

if __name__ == "__main__":
    main()