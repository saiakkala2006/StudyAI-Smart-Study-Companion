from PyPDF2 import PdfReader


def extract_pdf_text(filepath):

    reader = PdfReader(filepath)

    text = ""

    for page in reader.pages:

        page_text = page.extract_text()

        if page_text:
            text += page_text + "\n"

    return text