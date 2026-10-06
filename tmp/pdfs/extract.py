from pypdf import PdfReader
from pathlib import Path
p=PdfReader(r'C:\Users\Hp\Downloads\ch_1_A.pdf')
text=[f'\n--- PAGE {i+1} ---\n'+page.extract_text() for i,page in enumerate(p.pages)]
Path('tmp/pdfs/chapter.txt').write_text('\n'.join(text),encoding='utf-8')
print('PAGES',len(p.pages))
print('\n'.join(text))
