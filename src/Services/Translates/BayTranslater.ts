import { wxp } from "base";

export class BayTranslate {
  async Search(word: string) {
    try {
      let result = await wxp.request({
        url: `https://www.shanbay.com/api/v1/bdc/search/?word=${word}&version_id=2`
      });
      if(result.data.status_code == 0){
        return result.data.data;
      }
      else {
          throw new Error(result.data.msg);
      }
    } catch (error) {
        throw error;
    }
  }
}
