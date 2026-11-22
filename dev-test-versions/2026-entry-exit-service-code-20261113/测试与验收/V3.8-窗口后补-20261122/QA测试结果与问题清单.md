# V3.8 出入境证件服务码接入｜QA测试结果与问题清单

## 当前状态
{
  "cases": 36,
  "variants": 149,
  "results": {
    "未跑": 144
  },
  "scope": {
    "本期必测": 144,
    "本轮不执行": 5
  },
  "parentResults": {
    "未跑": 35,
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
