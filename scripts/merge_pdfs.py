from pypdf import PdfReader, PdfWriter
import sys
import os

if len(sys.argv) < 4:
    print("Usage: merge_pdfs.py output.pdf input1.pdf input2.pdf [...]")
    sys.exit(2)

out_path = sys.argv[1]
inputs = sys.argv[2:]

writer = PdfWriter()
for path in inputs:
    print(f"Appending: {path}")
    try:
        if os.path.getsize(path) == 0:
            print(f"Warning: Skipping empty file {path}")
            continue
    except OSError:
        print(f"Warning: Cannot access {path}; skipping")
        continue
    reader = PdfReader(path)
    for page in reader.pages:
        writer.add_page(page)

with open(out_path, "wb") as f:
    writer.write(f)

print(f"Wrote merged PDF: {out_path}")
