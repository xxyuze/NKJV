// 此文件是由模板文件 ".dtpl/component/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import { MyComponent, comify } from "base";

@comify()
export default class extends MyComponent {
  /**
   * 组件的属性列表
   */
  properties = {
    text: {
      value: "",
      type: String
    },
    verse: {
      type: Number
    },
    select: {
      type: String
    }
  };

  /**
   * 组件的初始数据
   */
  data: any = {
    cutTexts: []
  };
  prop = Math.random()
  /**
   * 组件属性值有更新时会调用此函数，不需要在 properties 中设置 observer 函数
   */
  onPropUpdate(prop: string, newValue: any, oldValue: any) {
    console.log(prop)
    if (prop == "text") {
      let text = newValue as string;
      let cutTexts = text.split(" ");
      this.setDataSmart({
        cutTexts: cutTexts,
      });
    }
  }

  bindWordTap(e: any) {
    let index = e.currentTarget.dataset.index;
    this.setDataSmart({
      select: e.currentTarget.dataset.verse + '' + index
    });
    //this.properties.select =  e.currentTarget.dataset.verse * 10 + index;
    this.triggerEvent("wordSelected", this.data.cutTexts[index], {});
  }
}
