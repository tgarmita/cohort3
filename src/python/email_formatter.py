def email(first_name, last_name):
    return first_name.lower() + "." + last_name.lower() + "@evolveu.ca"

def test_formats_email():
    assert email("Larry", "Shumlich") == "larry.shumlich@evolveu.ca"
    assert email("Heiko", "Peters") ==  "heiko.peters@evolveu.ca"