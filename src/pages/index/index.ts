/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import { pagify, MyPage, wxp } from "base/";
import { _tableService } from "Services/BibleService";
import { _Translate } from 'Singleton';

// 把这个 class 转化成 微信的 Page 参数，并且注入全局 store
@pagify()
export default class extends MyPage {
  data = {
    count: 10,
    npmToast: false,
    demoToast: false,
    bibles: [],
    selectWordIndex:'',
    showCard:false,
    wordExplain:{}
  };

  onShow() {
    /**
     * setDataSmart 和 setData 基本一样，但 setDataSmart 内部做过优化：
     *
     * 1. 支持双向绑定
     * 2. 页面隐藏是会缓存 data，等到页面显示的时候再 set
     */
  }
  async onLoad() {
    let bibles = await _tableService.Bibles.GetBibles(1, 4);
    console.log(bibles);
    this.setDataSmart({ bibles: bibles });
  }
  async showDictionary(e:any){
    let word = e.detail;
    try {
      let result = await _Translate.Search(word)
      this.setDataSmart({
        wordExplain:result,
        showCard:true
      })
      console.log(result);
    } catch (error) {
      console.log(error);
      await wxp.showToast({
        title:error.message,
        icon:'none',
        duration:2000
      })
    }

    // await wxp.showModal({
    //   title:word,
    //   content:result.definition
    // });

  }
}
