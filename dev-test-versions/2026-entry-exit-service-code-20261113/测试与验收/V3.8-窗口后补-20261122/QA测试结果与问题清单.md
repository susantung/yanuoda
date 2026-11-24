# V3.8 出入境证件服务码接入｜QA测试结果与问题清单

## 当前状态
{
  "cases": 38,
  "variants": 165,
  "results": {
    "未跑": 160
  },
  "scope": {
    "本期必测": 160,
    "本轮不执行": 5
  },
  "parentResults": {
    "未跑": 37,
    "本轮不执行": 1
  },
  "issues": {}
}

本轮与累计以轮次和分支记录区分；全部执行不等于全部通过。

## 统一问题池

## 环境与阻塞


## 规则变化
date：2026-11-15
source：产品最新决定/后补方案2.4、5节
reason：旧日期与订单成功候选已被更正
oldRule：过期阻断/必须支付成功等历史候选
newRule：三项日期过期不阻断；订单只排除待付款，其他不额外处理
affectedCases：DATE-01
GOV-01
SUP-01
SUP-02
closedIssues：
date：2026-11-16
source：用户恢复补录原型并要求交付开发包
reason：原型制作取消状态已由用户后续恢复
oldRule：两处补录不制作原型
newRule：两处本机原型已恢复；不代表正式补录接口或持久化已验收
affectedCases：SUP-01
SUP-02
closedIssues：
date：2026-11-24
source：用户内导截图与团队带入可修改说明；后补方案1.1节
reason：原范围漏列内导两入口
oldRule：四类售票与两处补录未显式覆盖内导
newRule：增加内导散客录入与团队带入后编辑，复用已定来源/清空/校验逻辑，保护原团队资料；正式工程尚未验证
affectedCases：GUIDE-01
GUIDE-02
closedIssues：
date：2026-11-24
source：实际读取蓝湖《窗口售票-导游开单V1.4》右侧功能说明
reason：以原内导文档修正截图推导，明确非实名、多单带入、导入覆盖及出票后关联回写
oldRule：原增补未明确内导不限制实名，未列多单选择及覆盖清理；原团队资料保护未区分内导关联回写
newRule：保留人数可单独填写、同日同社多单与原导入覆盖；覆盖清理旧码，出票后仍按原流程写回内导关联；游客身份不被静默污染
affectedCases：GUIDE-01
GUIDE-02
closedIssues：
