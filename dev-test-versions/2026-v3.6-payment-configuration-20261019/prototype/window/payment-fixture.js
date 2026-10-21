// 由后台原型初始数据构建；不是线上接口。
window.paymentFixture={
  "scenicId": "yanoda-demo",
  "payments": [
    {
      "name": "现金",
      "code": "CASH",
      "on": true,
      "scenes": [
        "retail",
        "team",
        "partner",
        "innerGuide"
      ],
      "allowedScenes": [
        "retail",
        "team",
        "partner",
        "innerGuide"
      ],
      "mode": "线下支付",
      "integration": "—",
      "resource": "—",
      "usage": "—"
    },
    {
      "name": "扫码付",
      "code": "SCAN_PAY",
      "on": true,
      "scenes": [
        "retail",
        "team",
        "partner",
        "innerGuide"
      ],
      "allowedScenes": [
        "retail",
        "team",
        "partner",
        "innerGuide"
      ],
      "mode": "线下支付",
      "integration": "—",
      "resource": "跟窗口设备",
      "owner": "device",
      "usage": "允许多个并默认一个"
    },
    {
      "name": "银行卡",
      "code": "BANK_CARD",
      "on": true,
      "scenes": [
        "retail",
        "team",
        "partner",
        "innerGuide"
      ],
      "allowedScenes": [
        "retail",
        "team",
        "partner",
        "innerGuide"
      ],
      "mode": "线下支付",
      "integration": "—",
      "resource": "跟窗口设备",
      "owner": "device",
      "usage": "固定使用一个"
    },
    {
      "name": "微信",
      "code": "WECHAT",
      "on": true,
      "scenes": [
        "retail",
        "team",
        "partner",
        "innerGuide"
      ],
      "allowedScenes": [
        "retail",
        "team",
        "partner",
        "innerGuide"
      ],
      "mode": "线下支付",
      "integration": "—",
      "resource": "—",
      "usage": "—"
    },
    {
      "name": "支付宝",
      "code": "ALIPAY",
      "on": true,
      "scenes": [
        "retail",
        "team",
        "partner",
        "innerGuide"
      ],
      "allowedScenes": [
        "retail",
        "team",
        "partner",
        "innerGuide"
      ],
      "mode": "线下支付",
      "integration": "—",
      "resource": "—",
      "usage": "—"
    },
    {
      "name": "聚合支付",
      "code": "AGGREGATE_PAY",
      "on": true,
      "scenes": [
        "retail",
        "team",
        "innerGuide"
      ],
      "allowedScenes": [
        "retail",
        "team",
        "innerGuide"
      ],
      "mode": "线上支付",
      "integration": "建行聚合支付",
      "resource": "现有聚合支付设备关系",
      "usage": "—"
    },
    {
      "name": "挂帐",
      "code": "ON_ACCOUNT",
      "on": true,
      "scenes": [
        "team",
        "partnerSale",
        "innerGuide"
      ],
      "allowedScenes": [
        "team",
        "partnerSale",
        "innerGuide"
      ],
      "mode": "账户支付",
      "integration": "对应业务账户",
      "resource": "—",
      "usage": "—"
    },
    {
      "name": "预付款",
      "code": "PREPAY",
      "on": true,
      "scenes": [
        "team",
        "partnerSale",
        "innerGuide"
      ],
      "allowedScenes": [
        "team",
        "partnerSale",
        "innerGuide"
      ],
      "mode": "账户支付",
      "integration": "对应业务账户",
      "resource": "—",
      "usage": "—"
    },
    {
      "name": "授信签单",
      "code": "CREDIT_SIGN",
      "on": true,
      "scenes": [
        "team",
        "innerGuide"
      ],
      "allowedScenes": [
        "team",
        "innerGuide"
      ],
      "mode": "账户支付",
      "integration": "团队账户",
      "resource": "—",
      "usage": "—"
    }
  ],
  "resources": [
    {
      "id": "scan-1",
      "type": "scan",
      "name": "散客1号柜台码",
      "counterCode": "CCB-SK-01",
      "posCode": "",
      "enabled": true
    },
    {
      "id": "scan-2",
      "type": "scan",
      "name": "散客2号柜台码",
      "counterCode": "CCB-SK-02",
      "posCode": "",
      "enabled": true
    },
    {
      "id": "scan-3",
      "type": "scan",
      "name": "团队5号柜台码",
      "counterCode": "CCB-TD-05",
      "posCode": "",
      "enabled": true
    },
    {
      "id": "pos-1",
      "type": "pos",
      "name": "散客 POS-01",
      "counterCode": "",
      "posCode": "POS-SK-01",
      "enabled": true
    },
    {
      "id": "pos-2",
      "type": "pos",
      "name": "团队 POS-01",
      "counterCode": "",
      "posCode": "POS-TD-01",
      "enabled": true
    },
    {
      "id": "pos-3",
      "type": "pos",
      "name": "散客 POS-02",
      "counterCode": "",
      "posCode": "POS-SK-02",
      "enabled": true
    }
  ],
  "bindings": {
    "device:YST散客售票窗口2": {
      "scanSelected": [
        "scan-2"
      ],
      "scanDefault": "scan-2",
      "bankSelected": [
        "pos-3"
      ],
      "bankDefault": "pos-3"
    },
    "role:retail-test-01 / 散客测试1": {
      "scanSelected": [
        "scan-1"
      ],
      "scanDefault": "scan-1",
      "bankSelected": [
        "pos-1"
      ],
      "bankDefault": "pos-1"
    },
    "role:retail-test-02 / 散客测试2": {
      "scanSelected": [
        "scan-2"
      ],
      "scanDefault": "scan-2",
      "bankSelected": [
        "pos-3"
      ],
      "bankDefault": "pos-3"
    },
    "device:YST团队售票窗口": {
      "scanSelected": [
        "scan-3"
      ],
      "scanDefault": "scan-3",
      "bankSelected": [
        "pos-2"
      ],
      "bankDefault": "pos-2"
    },
    "device:YST散客售票窗口": {
      "scanSelected": [
        "scan-1",
        "scan-2"
      ],
      "scanDefault": "scan-1",
      "bankSelected": [
        "pos-1"
      ],
      "bankDefault": "pos-1"
    },
    "role:yndtd13 / 团队13": {
      "scanSelected": [
        "scan-3"
      ],
      "scanDefault": "scan-3",
      "bankSelected": [
        "pos-2"
      ],
      "bankDefault": "pos-2"
    },
    "role:yndtd12 / 团队12": {
      "scanSelected": [
        "scan-3"
      ],
      "scanDefault": "scan-3",
      "bankSelected": [
        "pos-2"
      ],
      "bankDefault": "pos-2"
    },
    "role:yndxcyx / 呀诺达现场营销": {
      "scanSelected": [
        "scan-1",
        "scan-2"
      ],
      "scanDefault": "scan-1",
      "bankSelected": [
        "pos-1"
      ],
      "bankDefault": "pos-1"
    }
  },
  "session": {
    "deviceKey": "device:YST散客售票窗口",
    "accountKey": "role:retail-test-01 / 散客测试1",
    "scene": "retail"
  },
  "accounts": [
    {
      "value": "role:retail-test-01 / 散客测试1",
      "label": "retail-test-01 / 散客测试1"
    },
    {
      "value": "role:retail-test-02 / 散客测试2",
      "label": "retail-test-02 / 散客测试2"
    },
    {
      "value": "role:yndtd13 / 团队13",
      "label": "yndtd13 / 团队13"
    },
    {
      "value": "role:yndtd12 / 团队12",
      "label": "yndtd12 / 团队12"
    },
    {
      "value": "role:yndxcyx / 呀诺达现场营销",
      "label": "yndxcyx / 呀诺达现场营销"
    }
  ],
  "devices": [
    {
      "value": "device:YST散客售票窗口2",
      "label": "YST散客售票窗口2"
    },
    {
      "value": "device:YST团队售票窗口",
      "label": "YST团队售票窗口"
    },
    {
      "value": "device:YST散客售票窗口",
      "label": "YST散客售票窗口"
    }
  ]
};
