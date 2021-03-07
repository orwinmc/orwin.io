import os
import uuid
from PIL import Image
from PIL.ExifTags import TAGS

if __name__ == "__main__":
    root = '/Users/michaelorwin/Documents/Programming/github/orwin.io/web/public/images'

    with open('images.tsx', 'w') as fout:
        fout.write('const images = [')

        for filename in os.listdir(root):
            if (filename == '.DS_Store'):
                continue

            print(filename)

            imagePath = os.path.join(root, filename)
            imageDetails = {}

            with Image.open(imagePath) as image:
                imageDetails['id'] = uuid.uuid4().hex
                imageDetails['src'] = imagePath[imagePath.find('images'):]
                imageDetails['alt'] = ''
                imageDetails['width'] = image.width
                imageDetails['height'] = image.height
            fout.write(str(imageDetails).replace('\"', ''))
            fout.write(',')

        fout.write(']\n\n')
        fout.write('export default images')


""" Gets EXIF Data from Image file

exifData = image.getexif()

            if (exifData):
                for tagID in exifData:
                    tag = TAGS.get(tagID, tagID)
                    value = exifData.get(tagID)

                    if isinstance(value, bytes):
                        value = value.decode()

                    #print(f"{tag:25}: {value}") """
