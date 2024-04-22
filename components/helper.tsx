import { getUrl } from 'aws-amplify/storage';

export async function getUrlResult(filename : string): Promise<any> {
    console.log('Filename', filename);
    const urlResult = (await getUrl({
      key: filename,
    }));
    console.log('urlResult', urlResult);
    return urlResult;

}

