from PIL import Image,ImageDraw
from pathlib import Path
files=sorted(Path('tmp/pdfs').glob('chapter-*.png'))
for start in range(0,len(files),4):
 sheet=Image.new('RGB',(2164,2860),'white')
 for n,f in enumerate(files[start:start+4]):
  im=Image.open(f); im.thumbnail((1082,1400)); x=(n%2)*1082; y=(n//2)*1430
  sheet.paste(im,(x,y+30)); ImageDraw.Draw(sheet).text((x+20,y+5),f'PAGE {start+n+1}',fill='red')
 sheet.save(f'tmp/pdfs/sheet-{start//4+1}.png')
