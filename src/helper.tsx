import { getUrl } from 'aws-amplify/storage';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import { imageObject } from './types';

Amplify.configure(amplifyconfig, {ssr: true});

export async function getUrlResult(filename : string): Promise<any> {
    console.log('Filename', filename);
    const urlResult = (await getUrl({
      key: `${filename}`,
    }));
    console.log('urlResult', urlResult.url.href);
    return urlResult.url.href;

}

export async function fetchURL(keys: any[]): Promise<imageObject[]> {
  const newImageObjects: imageObject[] = [];

  await Promise.all(
    keys.map(async (key) => {
      try {
        const response = await getUrlResult(key.key);

        if (response) {
          newImageObjects.push({
            url: response,
            s3key: key,
          });
        } else {
          console.error("Error fetching from S3");
        }
      } catch (error) {
        console.error("Error getting URL");
      }
    })
  );

  return newImageObjects;
}