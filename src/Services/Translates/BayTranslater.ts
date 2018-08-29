import { wxp } from "base";
import { ITranslate, TranslateResult } from "./ITranslater";
export class BayTranslate implements ITranslate {
  async Search(word: string) {
    try {
      let result = await wxp.request({
        url: `https://www.shanbay.com/api/v1/bdc/search/?word=${word}&version_id=2`
      });
      if (result.data.status_code == 0) {
        let data = result.data.data;
        let translateResult = new TranslateResult(
          data.content,
          data.definition,
          data.pronunciation,
          data.audio,
          data.has_audio
        );
        return translateResult;
      } else {
        let error = new Error(result.data.msg);
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
}
