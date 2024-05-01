import { getUrl } from 'aws-amplify/storage';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig, {ssr: true});

export async function getUrlResult(filename : string): Promise<any> {
    console.log('Filename', filename);
    const urlResult = (await getUrl({
      key: `${filename}`,
    }));
    console.log('urlResult', urlResult.url.href);
    return urlResult.url.href;

}
