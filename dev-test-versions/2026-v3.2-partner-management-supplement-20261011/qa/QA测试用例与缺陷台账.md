# V3.2散客合作伙伴管理增补｜QA测试用例与缺陷台账

## 当前统计
{
  "cases": 28,
  "variants": 342,
  "results": {
    "阻塞": 20,
    "通过": 316,
    "有问题": 6
  },
  "scope": {
    "本期必测": 342
  },
  "parentResults": {
    "阻塞": 5,
    "通过": 20,
    "有问题": 3
  },
  "issues": {
    "已验证修复": 7,
    "当前缺陷": 2,
    "待复测": 1
  }
}

## 基线与覆盖
id：COV-001
name：创建及查看唯一待认领客户
pages：B01
B02
B03
B04
flow：FL01
scenario：档案与账户
caseIds：PM-001
ruleRefs：label：增补20号 B01
path：../development-spec.html#B01
label：增补20号 B02
path：../development-spec.html#B02
label：增补20号 B03
path：../development-spec.html#B03
label：增补20号 B04
path：../development-spec.html#B04
variantIds：PM-001-01
PM-001-02
PM-001-03
PM-001-03-S02
PM-001-03-S03
PM-001-04
protocolId：P-READ
dependencies：
id：COV-002
name：窗口对象与售票关联
pages：W00
W01
W02
flow：FL01
scenario：档案与账户
caseIds：PM-002
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
variantIds：PM-002-01
PM-002-02
PM-002-02-S02
PM-002-03
PM-002-03-S02
protocolId：P-READ
dependencies：
id：COV-003
name：特殊表单和输入校验
pages：W03
flow：FL02
scenario：待认领入款
caseIds：PM-003
ruleRefs：label：增补20号 W03
path：../development-spec.html#W03
variantIds：PM-003-01
PM-003-02
PM-003-02-S02
PM-003-02-S03
PM-003-02-S04
PM-003-02-S05
PM-003-03
PM-003-03-S02
PM-003-03-S03
PM-003-04
PM-003-04-S02
protocolId：P-IN
dependencies：
id：COV-004
name：日期规则及时间保存
pages：W02
W03
W06
W12
B05
flow：FL03
scenario：支付与日期
caseIds：PM-004
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
variantIds：PM-004-01
PM-004-01-S02
PM-004-01-S03
PM-004-01-S04
PM-004-01-S05
PM-004-01-S06
PM-004-01-S07
PM-004-01-S08
PM-004-01-S09
PM-004-02
PM-004-02-S02
PM-004-02-S03
PM-004-03
PM-004-03-S02
PM-004-03-S03
protocolId：P-PAY
dependencies：PM-001
id：COV-005
name：普通支付资格、排序及资源
pages：W02
W03
W06
W00
W01
W05
W12
W13
B05
B08
flow：FL03
scenario：支付与日期
caseIds：PM-005
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
variantIds：PM-005-01
PM-005-01-S02
PM-005-01-S03
PM-005-01-S04
PM-005-02
PM-005-02-S02
PM-005-02-S03
PM-005-02-S04
PM-005-02-S05
PM-005-02-S06
PM-005-02-S07
PM-005-02-S08
PM-005-02-S09
PM-005-02-S10
PM-005-02-S11
PM-005-02-S12
PM-005-02-S13
PM-005-02-S14
PM-005-02-S15
PM-005-02-S16
PM-005-03
PM-005-03-S02
PM-005-03-S03
PM-005-03-S04
PM-005-03-S05
PM-005-03-S06
PM-005-03-S07
PM-005-03-S08
PM-005-03-S09
PM-005-03-S10
PM-005-03-S11
PM-005-03-S12
PM-005-03-S13
PM-005-03-S14
PM-005-03-S15
PM-005-03-S16
PM-005-04
PM-005-04-S02
PM-005-04-S03
PM-005-04-S04
PM-005-04-S05
PM-005-04-S06
PM-005-04-S07
PM-005-04-S08
PM-005-04-S09
PM-005-04-S10
PM-005-04-S11
PM-005-04-S12
PM-005-04-S13
PM-005-04-S14
PM-005-04-S15
PM-005-04-S16
PM-005-04-S17
PM-005-04-S18
PM-005-05
PM-005-05-S02
PM-005-05-S03
PM-005-05-S04
PM-005-05-S05
PM-005-05-S06
PM-005-05-S07
PM-005-05-S08
protocolId：P-PAY
dependencies：
id：COV-006
name：现金与其他普通方式
pages：W02
W03
W06
W00
W01
W05
flow：FL03
scenario：支付与日期
caseIds：PM-006
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
variantIds：PM-006-01
PM-006-01-S02
PM-006-01-S03
PM-006-01-S04
PM-006-01-S05
PM-006-01-S06
PM-006-01-S07
PM-006-01-S08
PM-006-01-S09
PM-006-02
PM-006-02-S02
PM-006-03
PM-006-03-S02
PM-006-03-S03
PM-006-03-S04
PM-006-03-S05
PM-006-03-S06
PM-006-03-S07
PM-006-03-S08
PM-006-03-S09
PM-006-03-S10
PM-006-03-S11
PM-006-03-S12
PM-006-03-S13
PM-006-03-S14
PM-006-03-S15
PM-006-03-S16
PM-006-03-S17
PM-006-03-S18
PM-006-03-S19
PM-006-03-S20
PM-006-INH-SALE-01
PM-006-INH-SALE-02
PM-006-INH-SALE-03
PM-006-INH-SALE-04
PM-006-INH-LIST-01
PM-006-INH-LIST-02
PM-006-INH-LIST-03
PM-006-INH-LIST-04
protocolId：P-PAY
dependencies：PM-001
id：COV-007
name：完成入款并回查
pages：W03
B04
W12
B05
B11
flow：FL02
scenario：待认领入款
caseIds：PM-007
ruleRefs：label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B11
path：../development-spec.html#B11
variantIds：PM-007-01
PM-007-02
PM-007-03
protocolId：P-IN
dependencies：PM-001
id：COV-008
name：来源资格与筛选
pages：W04
flow：FL04
scenario：来源选择与长期充值
caseIds：PM-008
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04
variantIds：PM-008-01
PM-008-02
PM-008-02-S02
PM-008-02-S03
PM-008-02-S04
PM-008-02-S05
PM-008-02-S06
PM-008-02-S07
PM-008-02-S08
PM-008-03
protocolId：P-ALLOC
dependencies：PM-001
PM-007
id：COV-009
name：重选、取消及普通支付切换
pages：W02
W04
W06
flow：FL04
scenario：来源选择与长期充值
caseIds：PM-009
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06
variantIds：PM-009-01
PM-009-01-S02
PM-009-01-S03
PM-009-01-S04
PM-009-02
PM-009-02-S02
PM-009-03
protocolId：P-ALLOC
dependencies：PM-001
PM-007
id：COV-010
name：来源用于长期充值及分配
pages：W02
B04
B05
B09
B11
W16
B12
flow：FL04
scenario：来源选择与长期充值
caseIds：PM-010
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12
variantIds：PM-010-01
PM-010-02
PM-010-03
PM-010-04
PM-010-04-S02
PM-010-04-S03
PM-010-04-S04
PM-010-05
PM-010-05-S02
protocolId：P-ALLOC
dependencies：PM-001
PM-007
id：COV-011
name：列表入口、查询和按钮
pages：W05
flow：FL05
scenario：临客列表与回款
caseIds：PM-011
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05
variantIds：PM-011-01
PM-011-02
PM-011-03
PM-011-03-S02
PM-011-03-S03
PM-011-03-S04
PM-011-03-S05
PM-011-03-S06
PM-011-03-S07
PM-011-04
PM-011-04-S02
PM-011-04-S03
PM-011-04-S04
PM-011-05
protocolId：P-SETTLE
dependencies：PM-001
id：COV-012
name：候选金额、字段及排序
pages：W05
W16
B05
flow：FL05
scenario：临客列表与回款
caseIds：PM-012
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05
variantIds：PM-012-01
PM-012-01-S02
PM-012-01-S03
PM-012-01-S04
PM-012-01-S05
PM-012-02
PM-012-03
PM-012-04
PM-012-04-S02
protocolId：P-SETTLE
dependencies：PM-001
id：COV-013
name：普通支付结清
pages：W06
W07
R01
flow：FL05
scenario：临客列表与回款
caseIds：PM-013
ruleRefs：label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 R01
path：../development-spec.html#R01
variantIds：PM-013-01
PM-013-02
PM-013-03
PM-013-04
PM-013-05
protocolId：P-SETTLE
dependencies：PM-001
id：COV-014
name：先找款再选订单
pages：W04
W05
W06
flow：FL04
scenario：来源选择与长期充值
caseIds：PM-014
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W06
path：../development-spec.html#W06
variantIds：PM-014-01
PM-014-02
PM-014-03
PM-014-04
PM-014-04-S02
PM-014-04-S03
PM-014-04-S04
PM-014-04-S05
PM-014-04-S06
PM-014-05
PM-014-05-S02
PM-014-05-S03
protocolId：P-ALLOC
dependencies：PM-001
PM-007
id：COV-015
name：待认领来源结清及回查
pages：W06
B04
B05
B09
B11
W16
B12
flow：FL05
scenario：临客列表与回款
caseIds：PM-015
ruleRefs：label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12
variantIds：PM-015-01
PM-015-02
PM-015-03
protocolId：P-SETTLE
dependencies：PM-001
id：COV-016
name：多订单差异二次确认
pages：W07
W08
W06
flow：FL05
scenario：临客列表与回款
caseIds：PM-016
ruleRefs：label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 W08
path：../development-spec.html#W08
variantIds：PM-016-01
PM-016-02
PM-016-02-S02
PM-016-02-S03
PM-016-02-S04
PM-016-03
PM-016-03-S02
PM-016-03-S03
PM-016-03-S04
PM-016-04
PM-016-04-S02
protocolId：P-SETTLE
dependencies：PM-001
id：COV-017
name：迁移选择与新建目标
pages：W08
W09
W10
W11
R01
flow：FL06
scenario：临客迁移
caseIds：PM-017
ruleRefs：label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W09
path：../development-spec.html#W09
label：增补20号 W10
path：../development-spec.html#W10
label：增补20号 W11
path：../development-spec.html#W11
variantIds：PM-017-01
PM-017-02
PM-017-02-S02
PM-017-02-S03
PM-017-02-S04
PM-017-03
PM-017-03-S02
PM-017-03-S03
PM-017-03-S04
PM-017-03-S05
PM-017-03-S06
PM-017-03-S07
PM-017-04
protocolId：P-MOVE
dependencies：PM-001
id：COV-018
name：已有目标及额度不足迁移
pages：W11
R01
B11
W16
flow：FL06
scenario：临客迁移
caseIds：PM-018
ruleRefs：label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16
variantIds：PM-018-01
PM-018-01-S02
PM-018-01-S03
PM-018-01-S04
PM-018-01-S05
PM-018-02
PM-018-02-S02
PM-018-03
PM-018-04
protocolId：P-MOVE
dependencies：PM-001
id：COV-019
name：记录列表、筛选及导出
pages：W12
W14
B05
B09
flow：FL07
scenario：后台与记录
caseIds：PM-019
ruleRefs：label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W14
path：../development-spec.html#W14
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09
variantIds：PM-019-01
PM-019-02
PM-019-02-S02
PM-019-03
PM-019-03-S02
PM-019-03-S03
PM-019-03-S04
PM-019-04
protocolId：P-RECORD
dependencies：PM-001
id：COV-020
name：详情互查及字段展示
pages：W13
W15
B08
B10
R01
W05
W04
B11
flow：FL07
scenario：后台与记录
caseIds：PM-020
ruleRefs：label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 R01
path：../development-spec.html#R01
variantIds：PM-020-01
PM-020-01-S02
PM-020-01-S03
PM-020-01-S04
PM-020-01-S05
PM-020-02
PM-020-02-S02
PM-020-02-S03
PM-020-02-S04
PM-020-02-S05
PM-020-02-S06
PM-020-02-S07
PM-020-02-S08
PM-020-03
PM-020-04
protocolId：P-RECORD
dependencies：PM-001
id：COV-021
name：后台新增和导入对象限制
pages：B06
B07
B05
W05
B11
flow：FL07
scenario：后台与记录
caseIds：PM-021
ruleRefs：label：增补20号 B06
path：../development-spec.html#B06
label：增补20号 B07
path：../development-spec.html#B07
variantIds：PM-021-01
PM-021-01-S02
PM-021-01-S03
PM-021-02
PM-021-03
PM-021-03-S02
PM-021-03-S03
PM-021-04
protocolId：P-RECORD
dependencies：PM-001
id：COV-022
name：资金流水归类与时间
pages：B11
flow：FL08
scenario：账表联动
caseIds：PM-022
ruleRefs：label：增补20号 B11
path：../development-spec.html#B11
variantIds：PM-022-01
PM-022-02
PM-022-03
protocolId：P-REPORT
dependencies：PM-001
PM-007
id：COV-023
name：分组、小计、动态支付列
pages：W16
flow：FL08
scenario：账表联动
caseIds：PM-023
ruleRefs：label：增补20号 W16
path：../development-spec.html#W16
variantIds：PM-023-01
PM-023-01-S02
PM-023-01-S03
PM-023-02
PM-023-02-S02
PM-023-03
PM-023-04
PM-023-05
protocolId：P-REPORT
dependencies：PM-001
PM-007
id：COV-024
name：跨日、跨操作人及后台对帐单
pages：W16
B12
flow：FL08
scenario：账表联动
caseIds：PM-024
ruleRefs：label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12
variantIds：PM-024-01
PM-024-02
PM-024-03
PM-024-03-S02
PM-024-04
protocolId：P-REPORT
dependencies：PM-001
PM-007
id：COV-025
name：正常顺序操作下提交重校验
pages：W00
W01
W02
W03
W04
W06
W08
flow：FL09
scenario：保存与重校验
caseIds：PM-025
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W08
path：../development-spec.html#W08
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
variantIds：PM-025-01
PM-025-02
PM-025-02-S02
PM-025-02-S03
PM-025-03
PM-025-04
PM-025-05
PM-025-05-S02
PM-025-05-S03
PM-025-05-S04
PM-025-06
PM-025-06-S02
PM-025-06-S03
PM-025-07
protocolId：P-RECHECK
dependencies：PM-001
id：COV-026
name：支付排序、首次默认及选择保留
pages：W00
W01
W02
W03
W06
W05
flow：FL03
scenario：支付与日期
caseIds：PM-026
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
variantIds：PM-026-01
PM-026-02
PM-026-03
PM-026-04
PM-026-05
PM-026-06
PM-026-07
PM-026-08
PM-026-09
PM-026-10
PM-026-11
PM-026-12
PM-026-13
PM-026-14
PM-026-15
PM-026-16
PM-026-17
PM-026-18
PM-026-19
PM-026-20
PM-026-21
PM-026-22
PM-026-23
PM-026-24
protocolId：P-PAY
dependencies：PM-001
id：COV-027
name：资源快照稳定性与跨主体来源使用
pages：W02
W03
W06
W13
W15
B08
B10
W16
B12
flow：FL07
scenario：后台与记录
caseIds：PM-027
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
variantIds：PM-027-01
PM-027-02
PM-027-03
PM-027-04
PM-027-05
PM-027-06
PM-027-07
PM-027-08
protocolId：P-RECORD
dependencies：PM-005
PM-007
id：COV-028
name：伙伴售票支付候选及账户锁定的必要联动
pages：W00
flow：FL01
scenario：档案与账户
caseIds：PM-028
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
variantIds：PM-028-01
PM-028-02
PM-028-03
PM-028-04
PM-028-05
protocolId：P-READ
dependencies：

## PM-001 创建及查看唯一待认领客户
模块：档案与账户
预期：名称固定、启用、初始余额0，只建预付款账户，不生成入款；待认领类型不可再选；通过正常入口不能重复创建；仅查看和账户；无编辑禁用删除、无挂帐账户、无关闭非负限制入口；隐藏字段草稿和校验清除；待认领不保存联系人或档案负责人
当前：阻塞

### PM-001-01 未创建时新增待认领类型并保存
范围：本期必测
结果：阻塞
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
steps：未创建时新增待认领类型并保存
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：名称固定、启用、初始余额0，只建预付款账户，不生成入款
actual：现有唯一待认领A3597284940257984512；本次重开新增类型下拉，待认领项为ant-select-item-option-disabled，正常入口无法选择，故不能执行首次创建及普通草稿切待认领再切回。不删除已有财务对象。已取消新增草稿。
result：阻塞
verification：B01
B02
B03
B04
businessIds：
evidence：
issueIds：
blockerIds：ENV-004
执行设计（非执行结果）：
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
dataIds：D-01
D-04
sampleKey：QA-PM-20261111-PM-001-01
dependencies：
steps：未创建时新增待认领类型并保存
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：名称固定、启用、初始余额0，只建预付款账户，不生成入款
verification：B01
B02
B03
B04
protocolId：P-READ
checkpoints：页面字段和操作可见性
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B01
path：../development-spec.html#B01
label：增补20号 B02
path：../development-spec.html#B02
label：增补20号 B03
path：../development-spec.html#B03
label：增补20号 B04
path：../development-spec.html#B04

### PM-001-02 已有时再次打开新增
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:05:23+08:00
preconditions：已有唯一待认领客户，不删除现存档案；后台西瓜授权测试会话
steps：已有时再次打开新增
expected：待认领类型不可再选；通过正常入口不能重复创建
actual：后台新增类型下拉中“待认领客户”选项为ant-select-item-option-disabled，正常入口不可再选。取消新增，未写入。
result：通过
businessIds：A3597284940257984512
verification：B01
B02
B03
B04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
dataIds：D-01
D-04
sampleKey：QA-PM-20261111-PM-001-02
dependencies：
steps：已有时再次打开新增
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：待认领类型不可再选；通过正常入口不能重复创建
verification：B01
B02
B03
B04
protocolId：P-READ
checkpoints：页面字段和操作可见性
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B01
path：../development-spec.html#B01
label：增补20号 B02
path：../development-spec.html#B02
label：增补20号 B03
path：../development-spec.html#B03
label：增补20号 B04
path：../development-spec.html#B04

### PM-001-03 在B01核对待认领特殊档案／账户操作
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:05:23+08:00
preconditions：已有唯一待认领客户，不删除现存档案；后台西瓜授权测试会话
steps：在B01核对待认领特殊档案／账户操作
expected：仅查看、账户，无编辑禁用删除
actual：按待认领客户查询仅1条，账户A3597284940257984512、预付款、启用、联系人/电话/负责人为“-”；仅查看和账户，无编辑禁用删除。
result：通过
businessIds：A3597284940257984512
verification：B01
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
dataIds：D-01
D-04
sampleKey：QA-PM-20261111-PM-001-03
dependencies：
steps：在B01核对待认领特殊档案／账户操作
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅查看、账户，无编辑禁用删除
verification：B01
protocolId：P-READ
checkpoints：页面字段和操作可见性
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B01
path：../development-spec.html#B01
label：增补20号 B02
path：../development-spec.html#B02
label：增补20号 B03
path：../development-spec.html#B03
label：增补20号 B04
path：../development-spec.html#B04

### PM-001-03-S02 在B03核对待认领特殊档案／账户操作
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:05:23+08:00
preconditions：已有唯一待认领客户，不删除现存档案；后台西瓜授权测试会话
steps：在B03核对待认领特殊档案／账户操作
expected：只读特殊档案，无联系人及档案负责人回写
actual：查看弹窗类型待认领客户，名称待认领客户、预付款、账户A3597284940257984512；所有输入disabled，无联系人/负责人字段，操作只有关闭。关闭后列表仍为原记录。
result：通过
businessIds：A3597284940257984512
verification：B03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
dataIds：D-01
D-04
sampleKey：QA-PM-20261111-PM-001-03-S02
dependencies：
steps：在B03核对待认领特殊档案／账户操作
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只读特殊档案，无联系人及档案负责人回写
verification：B03
protocolId：P-READ
checkpoints：页面字段和操作可见性
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B01
path：../development-spec.html#B01
label：增补20号 B02
path：../development-spec.html#B02
label：增补20号 B03
path：../development-spec.html#B03
label：增补20号 B04
path：../development-spec.html#B04

### PM-001-03-S03 在B04核对待认领特殊档案／账户操作
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:05:23+08:00
preconditions：已有唯一待认领客户，不删除现存档案；后台西瓜授权测试会话
steps：在B04核对待认领特殊档案／账户操作
expected：仅预付款账户、不可关闭非负限制，无挂帐账户
actual：账户入口进入预付款管理并带账户号，当前余额0.03、额度限制启用，仅充值记录及资金流水按钮，无额度开关；切挂帐管理再按同账户查询暂无数据。现存余额不用于创建初始值判断。
result：通过
businessIds：A3597284940257984512
verification：B04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
dataIds：D-01
D-04
sampleKey：QA-PM-20261111-PM-001-03-S03
dependencies：
steps：在B04核对待认领特殊档案／账户操作
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅预付款账户、不可关闭非负限制，无挂帐账户
verification：B04
protocolId：P-READ
checkpoints：页面字段和操作可见性
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B01
path：../development-spec.html#B01
label：增补20号 B02
path：../development-spec.html#B02
label：增补20号 B03
path：../development-spec.html#B03
label：增补20号 B04
path：../development-spec.html#B04

### PM-001-04 普通类型填草稿后切待认领再切回
范围：本期必测
结果：阻塞
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
steps：普通类型填草稿后切待认领再切回
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：隐藏字段草稿和校验清除；待认领不保存联系人或档案负责人
actual：现有唯一待认领A3597284940257984512；本次重开新增类型下拉，待认领项为ant-select-item-option-disabled，正常入口无法选择，故不能执行首次创建及普通草稿切待认领再切回。不删除已有财务对象。已取消新增草稿。
result：阻塞
verification：B01
B02
B03
B04
businessIds：
evidence：
issueIds：
blockerIds：ENV-004
执行设计（非执行结果）：
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
dataIds：D-01
D-04
sampleKey：QA-PM-20261111-PM-001-04
dependencies：
steps：普通类型填草稿后切待认领再切回
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：隐藏字段草稿和校验清除；待认领不保存联系人或档案负责人
verification：B01
B02
B03
B04
protocolId：P-READ
checkpoints：页面字段和操作可见性
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B01
path：../development-spec.html#B01
label：增补20号 B02
path：../development-spec.html#B02
label：增补20号 B03
path：../development-spec.html#B03
label：增补20号 B04
path：../development-spec.html#B04

## PM-002 窗口对象与售票关联
模块：档案与账户
预期：唯一、预付款、仅查看充值；空联系人和档案负责人显示—；不能作为售票客户；共用W02；购物车保留
当前：通过

### PM-002-01 查询充值列表的待认领行
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:09:34+08:00
preconditions：窗口YST售票窗口，既有待认领账户余额0.03；正常UI操作
steps：查询充值列表的待认领行
expected：唯一、预付款、仅查看充值；空联系人和档案负责人显示—
actual：窗口按待认领客户查询仅1条，同后台账户A3597284940257984512；预付款、启用，联系人电话负责人为“-”，仅查看/充值。
result：通过
businessIds：A3597284940257984512
verification：W00
W01
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
dataIds：D-01
D-04
sampleKey：QA-PM-20261111-PM-002-01
dependencies：
steps：查询充值列表的待认领行
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：唯一、预付款、仅查看充值；空联系人和档案负责人显示—
verification：W00
W01
protocolId：P-READ
checkpoints：页面字段和操作可见性
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02

### PM-002-02 临时售票客户选择搜索待认领
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:13:51.098263
preconditions：本轮Q、T及正常UI，授权测试环境
steps：临时售票客户选择搜索待认领
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：待认领不在售票候选，不能作为下单客户
actual：售票→临时/长期合作伙伴→选择伙伴下拉输入待认领，异步搜索最终暂无数据，不能选择该对象；正常长期Q可从结果表选择。未将待认领当售票客户。
result：通过
businessIds：DD261114035057001001s
A3619050752183123969
RG3619080438997073922
verification：W00
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
dataIds：D-01
D-04
sampleKey：QA-PM-20261111-PM-002-02
dependencies：
steps：临时售票客户选择搜索待认领
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：待认领不在售票候选，不能作为下单客户
verification：W00
protocolId：P-READ
checkpoints：页面字段和操作可见性
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02

### PM-002-02-S02 长期售票客户选择搜索待认领
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:04:05+08:00
preconditions：本轮临客订单A/B，非实名测试票97274各0.01；正常UI下单出票并选择不打印，无真实游客信息
steps：长期售票客户选择搜索待认领
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：待认领不在售票候选，不能作为下单客户
actual：售票长期伙伴选择列表共734条，充值启用列表735条；搜索待认领客户下拉无可选结果，待认领未出现在售票伙伴候选。本轮以公共临时客户正常造单，不用特殊待认领下单。
result：通过
businessIds：DD261114015654001001s
DD261114020123001001s
RG3618945164707119106
RG3618945164707119108
RG3618948239903703042
verification：W00
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
dataIds：D-01
D-04
sampleKey：QA-PM-20261111-PM-002-02-S02
dependencies：
steps：长期售票客户选择搜索待认领
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：待认领不在售票候选，不能作为下单客户
verification：W00
protocolId：P-READ
checkpoints：页面字段和操作可见性
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02

### PM-002-03 售票页购物车有商品时打开同一长期伙伴充值，取消并返回
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:31:24.344999+08:00
preconditions：同一HTTP QA TEST窗口ystceshi；当前账号绑定多资源；本轮自建G伙伴
steps：售票页购物车有商品时打开同一长期伙伴充值，取消并返回
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：带入相同伙伴账户及配置；售票页购物车保留
actual：购物车商品97274、1张、0.01元，姓名验收购物车保留；钱包充值带入G伙伴预付款A3618964766937858049；取消后商品、数量、姓名仍保留。
result：通过
businessIds：
verification：W00
W01
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
dataIds：D-01
D-04
sampleKey：QA-PM-20261111-PM-002-03
dependencies：
steps：售票页购物车有商品时打开同一长期伙伴充值，取消并返回
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：带入相同伙伴账户及配置；售票页购物车保留
verification：W00
W01
W02
protocolId：P-READ
checkpoints：页面字段和操作可见性
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02

### PM-002-03-S02 充值列表行打开同一长期伙伴充值，取消并返回
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:46:03.070069+08:00
preconditions：共享支付配置均为原值，G余额0.04、待认领0.04。
steps：打开对应入口
按记录手选或切页取消
回查字段、候选和保留状态
取消草稿，不提交
expected：带入相同伙伴账户及配置；售票页购物车保留
actual：售票G购物车保留非实名票1张0.01、姓名验收保留；切合作伙伴列表查询G打开充值，账户A3618964766937858049、预付款0.04及五种支付一致；取消充值返回售票，门票/数量/金额/姓名全部保留，最终主动取消草稿。
result：通过
businessIds：A3618964766937858049
verification：W00
W01
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
dataIds：D-01
D-04
sampleKey：QA-PM-20261111-PM-002-03-S02
dependencies：
steps：充值列表行打开同一长期伙伴充值，取消并返回
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：带入相同伙伴账户及配置；售票页购物车保留
verification：W00
W01
W02
protocolId：P-READ
checkpoints：页面字段和操作可见性
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02

## PM-003 特殊表单和输入校验
模块：待认领入款
预期：只读身份账号余额；无其他收入、订单选择、自付入口；均不能确认；合法0.01可继续；允许继续；本笔负责人可姓名或手机搜索；500字允许，超限限制或提示且不能保存超长值
当前：通过

### PM-003-01 打开待认领充值
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:09:34+08:00
preconditions：窗口YST售票窗口，既有待认领账户余额0.03；正常UI操作
steps：打开待认领充值
expected：只读身份账号余额；无其他收入、订单选择、自付入口
actual：只读名称、类型、账号及余额0.03；无其他收入、订单选择或自付入口。关闭重开仍为同一账户与余额。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：待认领唯一预付款账户可用；记录源账户原余额及本笔负责人。
dataIds：D-01
D-02
D-05
sampleKey：QA-PM-20261111-PM-003-01
dependencies：
steps：打开待认领充值
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只读身份账号余额；无其他收入、订单选择、自付入口
verification：W03
protocolId：P-IN
checkpoints：W03反馈→W12/W13→B05/B08→B04余额→B11正流水→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W03
path：../development-spec.html#W03

### PM-003-02 待认领入款金额输入空值
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:09:34+08:00
preconditions：窗口YST售票窗口，既有待认领账户余额0.03；正常UI操作
steps：待认领入款金额输入空值
expected：提示必填，不能提交
actual：金额为空、现金实收1，确认充值禁用，未提交。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：待认领唯一预付款账户可用；记录源账户原余额及本笔负责人。
dataIds：D-01
D-02
D-05
sampleKey：QA-PM-20261111-PM-003-02
dependencies：
steps：待认领入款金额输入空值
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示必填，不能提交
verification：W03
protocolId：P-IN
checkpoints：W03反馈→W12/W13→B05/B08→B04余额→B11正流水→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W03
path：../development-spec.html#W03

### PM-003-02-S02 待认领入款金额输入0
范围：本期必测
结果：通过
原因：R10真实回归：待认领现金实收0.01，充值0失焦提示“充值金额必须大于 0”，确认禁用；改0.01并失焦，异步校验完成后旧提示清除，合计0.01/找零0，确认启用。取消草稿，无提交。
runId：R01
executedAt：2026-11-14T01:09:34+08:00
preconditions：窗口YST售票窗口，既有待认领账户余额0.03；正常UI操作
steps：待认领入款金额输入0
expected：禁止提交，金额须大于0
actual：输入0失焦显示0.00，确认充值禁用；文案问题另记PM-BUG-001。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
runId：R06
executedAt：2026-11-14T15:56:22.419158+08:00
preconditions：独立HTTP QA标签，YST售票窗口，全新普通AA与待认领充值弹窗；仅输入校验不提交
steps：待认领入款金额输入0
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：禁止提交，金额须大于0
actual：零金额被正确阻止，提示却为“充值金额与计入其他收入至少一项大于 0”，而待认领弹窗没有其他收入字段。改为0.01后提示清除、合计0.01、找零0、确认按钮启用。W02/W03现金99→100/150在校验完成后也均清除不足提示，找零0/50正确；原持续残留判断撤销。
result：有问题
businessIds：
verification：W03
evidence：evidence/PM-BUG-001-R06-仅零金额文案.png
issueIds：PM-BUG-001
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：禁止提交，金额须大于0
actual：待认领现金实收0.01，充值0失焦提示“充值金额必须大于 0”，确认禁用；改0.01并失焦，异步校验完成后旧提示清除，合计0.01/找零0，确认启用。取消草稿，无提交。
result：通过
businessIds：
verification：W03
evidence：
issueIds：PM-BUG-001
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：待认领唯一预付款账户可用；记录源账户原余额及本笔负责人。
dataIds：D-01
D-02
D-05
sampleKey：QA-PM-20261111-PM-003-02-S02
dependencies：
steps：待认领入款金额输入0
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：禁止提交，金额须大于0
verification：W03
protocolId：P-IN
checkpoints：W03反馈→W12/W13→B05/B08→B04余额→B11正流水→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W03
path：../development-spec.html#W03

### PM-003-02-S03 待认领入款金额输入-0.01
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:09:34+08:00
preconditions：窗口YST售票窗口，既有待认领账户余额0.03；正常UI操作
steps：待认领入款金额输入-0.01
expected：禁止负数金额
actual：输入-0.01失焦限制为0.00，确认充值禁用，未写入。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：待认领唯一预付款账户可用；记录源账户原余额及本笔负责人。
dataIds：D-01
D-02
D-05
sampleKey：QA-PM-20261111-PM-003-02-S03
dependencies：
steps：待认领入款金额输入-0.01
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：禁止负数金额
verification：W03
protocolId：P-IN
checkpoints：W03反馈→W12/W13→B05/B08→B04余额→B11正流水→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W03
path：../development-spec.html#W03

### PM-003-02-S04 待认领入款金额输入1.001
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:09:34+08:00
preconditions：窗口YST售票窗口，既有待认领账户余额0.03；正常UI操作
steps：待认领入款金额输入1.001
expected：不能提交三位小数或明确限制精度，不静默产生错误金额
actual：输入1.001失焦显示1.00，实收1、合计1.00，未提交三位小数。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：待认领唯一预付款账户可用；记录源账户原余额及本笔负责人。
dataIds：D-01
D-02
D-05
sampleKey：QA-PM-20261111-PM-003-02-S04
dependencies：
steps：待认领入款金额输入1.001
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不能提交三位小数或明确限制精度，不静默产生错误金额
verification：W03
protocolId：P-IN
checkpoints：W03反馈→W12/W13→B05/B08→B04余额→B11正流水→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W03
path：../development-spec.html#W03

### PM-003-02-S05 待认领入款金额输入0.01
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:09:34+08:00
preconditions：窗口YST售票窗口，既有待认领账户余额0.03；正常UI操作
steps：待认领入款金额输入0.01
expected：金额精度合法，可继续正常校验
actual：金额及实收0.01，合计0.01、找零0.00，确认充值启用；但从0改为0.01后旧错误提示仍残留。未提交。
result：有问题
businessIds：A3597284940257984512
verification：W03
evidence：evidence/PM-BUG-001-金额纠正后旧校验残留.png
issueIds：PM-BUG-001
runId：R06
executedAt：2026-11-14T15:56:22.419158+08:00
preconditions：独立HTTP QA标签，YST售票窗口，全新普通AA与待认领充值弹窗；仅输入校验不提交
steps：待认领入款金额输入0.01
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：金额精度合法，可继续正常校验
actual：R06独立新标签YST售票窗口回归：待认领充值金额0→0.01移开焦点后，旧提示清除、合计0.01、找零0且确认启用；W02普通AA及W03待认领现金应收100，实收99先触发不足提示，分别纠正100/150并移开焦点后，校验完成时提示消失、找零0/50、可继续。普通150一次瞬时读取尚有旧提示，后续读取已清除，不能认定持续残留。未点击确认充值，草稿已取消。不推定开发修复，撤销此前持续残留判断。
result：通过
businessIds：
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：待认领唯一预付款账户可用；记录源账户原余额及本笔负责人。
dataIds：D-01
D-02
D-05
sampleKey：QA-PM-20261111-PM-003-02-S05
dependencies：
steps：待认领入款金额输入0.01
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：金额精度合法，可继续正常校验
verification：W03
protocolId：P-IN
checkpoints：W03反馈→W12/W13→B05/B08→B04余额→B11正流水→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W03
path：../development-spec.html#W03

### PM-003-03 负责人、付款人及备注留空
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：负责人、付款人及备注留空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：选填字段不阻止合法入款
actual：负责人、付款人、备注三项全空，现金100来源成功；原单RG3618936695031611394详情三项均显示—，未要求补填。随后整笔用作公司收入。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：待认领唯一预付款账户可用；记录源账户原余额及本笔负责人。
dataIds：D-01
D-02
D-05
sampleKey：QA-PM-20261111-PM-003-03
dependencies：
steps：负责人、付款人及备注留空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：选填字段不阻止合法入款
verification：W03
protocolId：P-IN
checkpoints：W03反馈→W12/W13→B05/B08→B04余额→B11正流水→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W03
path：../development-spec.html#W03

### PM-003-03-S02 按姓名搜索本笔负责人
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：按姓名搜索本笔负责人
expected：仅匹配可选员工，选择结果属于本笔
actual：按姓名管理员搜索，返回管理员17200000000，可正常选择；取消后档案负责人仍为空。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：待认领唯一预付款账户可用；记录源账户原余额及本笔负责人。
dataIds：D-01
D-02
D-05
sampleKey：QA-PM-20261111-PM-003-03-S02
dependencies：
steps：按姓名搜索本笔负责人
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅匹配可选员工，选择结果属于本笔
verification：W03
protocolId：P-IN
checkpoints：W03反馈→W12/W13→B05/B08→B04余额→B11正流水→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W03
path：../development-spec.html#W03

### PM-003-03-S03 按手机搜索本笔负责人
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：按手机搜索本笔负责人
expected：可按手机匹配选择，不回写共享档案
actual：按测试手机号17200000000搜索返回管理员，可正常选择；取消后档案负责人仍为空。仅验证选择与取消，未声称入款记录保存。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：待认领唯一预付款账户可用；记录源账户原余额及本笔负责人。
dataIds：D-01
D-02
D-05
sampleKey：QA-PM-20261111-PM-003-03-S03
dependencies：
steps：按手机搜索本笔负责人
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可按手机匹配选择，不回写共享档案
verification：W03
protocolId：P-IN
checkpoints：W03反馈→W12/W13→B05/B08→B04余额→B11正流水→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W03
path：../development-spec.html#W03

### PM-003-04 备注输入500字
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:45:40+08:00
preconditions：用户授权指定QA站测试数据；先查本日待认领充值记录无数据、原余额0.03，正常UI操作
steps：备注输入500字
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：允许保存500字并完整回显
actual：200元现金测试入款已提交；窗口及后台详情回查备注完整500字。单号RG3618929685644984322；余额0.03→200.03。
result：通过
businessIds：RG3618929685644984322
A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：待认领唯一预付款账户可用；记录源账户原余额及本笔负责人。
dataIds：D-01
D-02
D-05
sampleKey：QA-PM-20261111-PM-003-04
dependencies：
steps：备注输入500字
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：允许保存500字并完整回显
verification：W03
protocolId：P-IN
checkpoints：W03反馈→W12/W13→B05/B08→B04余额→B11正流水→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W03
path：../development-spec.html#W03

### PM-003-04-S02 备注输入501字
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:09:34+08:00
preconditions：窗口YST售票窗口，既有待认领账户余额0.03；正常UI操作
steps：备注输入501字
expected：限制长度或明确提示，不能保存超长备注
actual：备注正常填入500字，再通过按键输入第501字，实际长度仍500；未保存。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：待认领唯一预付款账户可用；记录源账户原余额及本笔负责人。
dataIds：D-01
D-02
D-05
sampleKey：QA-PM-20261111-PM-003-04-S02
dependencies：
steps：备注输入501字
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：限制长度或明确提示，不能保存超长备注
verification：W03
protocolId：P-IN
checkpoints：W03反馈→W12/W13→B05/B08→B04余额→B11正流水→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W03
path：../development-spec.html#W03

## PM-004 日期规则及时间保存
模块：支付与日期
预期：默认当天；选过去日期允许，未来日期禁止；支付日保存00:00:00；申请完成时间为实际时刻；禁止提交；等于或晚于来源日期可继续
当前：通过

### PM-004-01 W02打开并选择初始日期
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:57:06.575583+08:00
preconditions：QA TEST本轮自建G伙伴，预付款余额从0.00开始；后台西瓜／窗口YST分别操作
steps：W02打开并选择初始日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：默认当天
actual：W02新开默认2026-11-14当天。
result：通过
businessIds：
verification：W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-004-01
dependencies：PM-001
steps：W02打开并选择初始日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：默认当天
verification：W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05

### PM-004-01-S02 W02打开并选择过去日期
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:57:06.575583+08:00
preconditions：QA TEST本轮自建G伙伴，预付款余额从0.00开始；后台西瓜／窗口YST分别操作
steps：W02打开并选择过去日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：允许选择过去日期
actual：W02日历可点13日，支付日期变2026-11-13；合法金额及现金后确认可用，取消不提交。
result：通过
businessIds：
verification：W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-004-01-S02
dependencies：PM-001
steps：W02打开并选择过去日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：允许选择过去日期
verification：W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05

### PM-004-01-S03 W02打开并选择未来日期
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:57:06.575583+08:00
preconditions：QA TEST本轮自建G伙伴，预付款余额从0.00开始；后台西瓜／窗口YST分别操作
steps：W02打开并选择未来日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：禁止未来日期确认
actual：W02当天14日打开日历，15日单元格title=2026-11-15，class含ant-picker-cell-disabled，正常日历路径禁选未来日。
result：通过
businessIds：
verification：W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-004-01-S03
dependencies：PM-001
steps：W02打开并选择未来日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：禁止未来日期确认
verification：W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05

### PM-004-01-S04 W03打开并选择初始日期
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：W03打开并选择初始日期
expected：默认当天
actual：W03新开表单默认2026-11-14。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-004-01-S04
dependencies：PM-001
steps：W03打开并选择初始日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：默认当天
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05

### PM-004-01-S05 W03打开并选择过去日期
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：W03打开并选择过去日期
expected：允许选择过去日期
actual：日历选择2026-11-13成功，可进入正常金额校验；未提交。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-004-01-S05
dependencies：PM-001
steps：W03打开并选择过去日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：允许选择过去日期
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05

### PM-004-01-S06 W03打开并选择未来日期
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：W03打开并选择未来日期
expected：禁止未来日期确认
actual：未来2026-11-15日历单元格disabled；手工输入后离开日期框回退到有效2026-11-13，未确认未来日期，未提交。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-004-01-S06
dependencies：PM-001
steps：W03打开并选择未来日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：禁止未来日期确认
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05

### PM-004-01-S07 W06打开并选择初始日期
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:04:05+08:00
preconditions：本轮临客订单A/B，非实名测试票97274各0.01；正常UI下单出票并选择不打印，无真实游客信息
steps：W06打开并选择初始日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：默认当天
actual：W06首次打开本轮订单回款弹窗支付日默认2026-11-14。
result：通过
businessIds：DD261114015654001001s
DD261114020123001001s
RG3618945164707119106
RG3618945164707119108
RG3618948239903703042
verification：W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-004-01-S07
dependencies：PM-001
steps：W06打开并选择初始日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：默认当天
verification：W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05

### PM-004-01-S08 W06打开并选择过去日期
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:04:05+08:00
preconditions：本轮临客订单A/B，非实名测试票97274各0.01；正常UI下单出票并选择不打印，无真实游客信息
steps：W06打开并选择过去日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：允许选择过去日期
actual：W06支付日改2026-11-13失焦可保留，未提交；后恢复14日。
result：通过
businessIds：DD261114015654001001s
DD261114020123001001s
RG3618945164707119106
RG3618945164707119108
RG3618948239903703042
verification：W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-004-01-S08
dependencies：PM-001
steps：W06打开并选择过去日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：允许选择过去日期
verification：W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05

### PM-004-01-S09 W06打开并选择未来日期
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:04:05+08:00
preconditions：本轮临客订单A/B，非实名测试票97274各0.01；正常UI下单出票并选择不打印，无真实游客信息
steps：W06打开并选择未来日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：禁止未来日期确认
actual：W06日期13日基础上输入未来15日，Enter并点击付款人完全失焦后仍为13日，未来日期不保留，未写账。
result：通过
businessIds：DD261114015654001001s
DD261114020123001001s
RG3618945164707119106
RG3618945164707119108
RG3618948239903703042
verification：W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-004-01-S09
dependencies：PM-001
steps：W06打开并选择未来日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：禁止未来日期确认
verification：W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05

### PM-004-02 W02以过去支付日完成一笔本轮交易并回查
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:57:06.575583+08:00
preconditions：QA TEST本轮自建G伙伴，预付款余额从0.00开始；后台西瓜／窗口YST分别操作
steps：W02以过去支付日完成一笔本轮交易并回查
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：所选支付日00:00:00；申请完成为实际时刻；记录实际字段可见性
actual：W02本轮G选择过去支付日13日并完成，客户充值RG3619003799600644098及公司收入RG3619003799600644100在前后台详情均支付2026-11-13 00:00:00，申请/完成2026-11-14 02:55:47。
result：通过
businessIds：RG3619003799600644098
RG3619003799600644100
verification：W02
W12
B05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-004-02
dependencies：PM-001
steps：W02以过去支付日完成一笔本轮交易并回查
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：所选支付日00:00:00；申请完成为实际时刻；记录实际字段可见性
verification：W02
W12
B05
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05

### PM-004-02-S02 W03以过去支付日完成一笔本轮交易并回查
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：W03以过去支付日完成一笔本轮交易并回查
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：所选支付日00:00:00；申请完成为实际时刻；记录实际字段可见性
actual：W03补录支付日2026-11-13的250元来源，前后台记录支付时间13日00:00:00，申请/完成时间14日01:49:59，现金、管理员、YST售票窗口与窗口快照一致。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：W03
W12
B05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-004-02-S02
dependencies：PM-001
steps：W03以过去支付日完成一笔本轮交易并回查
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：所选支付日00:00:00；申请完成为实际时刻；记录实际字段可见性
verification：W03
W12
B05
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05

### PM-004-02-S03 W06以过去支付日完成一笔本轮交易并回查
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:50:47.992971+08:00
preconditions：本轮K两票0.02，独立QA标签正常退一票0.01；旧回款弹窗保留退款前0.02
steps：W06以过去支付日完成一笔本轮交易并回查
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：所选支付日00:00:00；申请完成为实际时刻；记录实际字段可见性
actual：W06本轮K主动选择过去支付日2026-11-13并完成。已回款列表及后台客户/收入详情均支付2026-11-13 00:00:00，申请完成2026-11-14 02:49:34，实际发生时刻与填写支付日分开保存。
result：通过
businessIds：DD261114024642001001s
LYAS3618996377808863232
RG3618997391509438466
RG3618997391509438468
verification：W06
W12
B05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-004-02-S03
dependencies：PM-001
steps：W06以过去支付日完成一笔本轮交易并回查
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：所选支付日00:00:00；申请完成为实际时刻；记录实际字段可见性
verification：W06
W12
B05
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05

### PM-004-03 来源支付日为T，使用日设为T前一天
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：来源支付日为T，使用日设为T前一天
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：禁止确认，无来源转出
actual：来源支付日13日，使用日12日、C200/I50合计250，确认按钮禁用；改同日13日恢复可确认，未提前转出。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：W02
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-004-03
dependencies：PM-001
steps：来源支付日为T，使用日设为T前一天
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：禁止确认，无来源转出
verification：W02
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05

### PM-004-03-S02 来源支付日为T，使用日设为T同日
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：来源支付日为T，使用日设为T同日
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：日期合法，继续金额等正常校验
actual：来源支付日13日，使用日同为13日，C200/I50合计250合法，确认启用；未提交，后改14日执行。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：W02
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-004-03-S02
dependencies：PM-001
steps：来源支付日为T，使用日设为T同日
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：日期合法，继续金额等正常校验
verification：W02
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05

### PM-004-03-S03 来源支付日为T，使用日设为T次日
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：来源支付日为T，使用日设为T次日
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：日期合法，按使用日统计
actual：来源支付日13日，使用日14日合法并成功；本日转出-250、客户充值+200、公司收入+50，原入款250仅计13日报表。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：W02
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-004-03-S03
dependencies：PM-001
steps：来源支付日为T，使用日设为T次日
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：日期合法，按使用日统计
verification：W02
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05

## PM-005 普通支付资格、排序及资源
模块：支付与日期
预期：方式按景区场景及主体有效资格取值并排序；资源只读；编号自动带出且只读；可切有效资源；柜台编码或POS编号随之更新；禁止确认；可手选有效其他方式，不自动切现金；详情及报表保留资源ID、名称、编号快照和前导零
当前：阻塞

### PM-005-01 售票页长期充值核对支付候选全集和当前主体
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:31:24.344999+08:00
preconditions：同一HTTP QA TEST窗口ystceshi；当前账号绑定多资源；本轮自建G伙伴
steps：售票页长期充值核对支付候选全集和当前主体
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅景区启用且适用充值／回款场景的五种普通方式取交集，按配置排序；不混入待认领内部来源
actual：后台九种方式及场景/归属、YST账号收款绑定已只读核对。W02普通候选为现金、扫码付、银行卡、微信、支付宝，顺序1/2/3/5/6一致；待认领账户作为单独内部来源可见。
result：通过
businessIds：
verification：W00
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-01
dependencies：
steps：售票页长期充值核对支付候选全集和当前主体
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅景区启用且适用充值／回款场景的五种普通方式取交集，按配置排序；不混入待认领内部来源
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-01-S02 列表行长期充值核对支付候选全集和当前主体
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：列表行长期充值核对支付候选全集和当前主体
expected：仅景区启用且适用充值／回款场景的五种普通方式取交集，按配置排序；不混入待认领内部来源
actual：后台已启用且适用伙伴充值/回款的普通方式顺序现金1/扫码2/银行卡3/微信5/支付宝6；W02普通方式正好这五项且顺序匹配，另有独立内部待认领账户入口，不混入普通方式。
result：通过
businessIds：A3606358539707891713
verification：W01
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-01-S02
dependencies：
steps：列表行长期充值核对支付候选全集和当前主体
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅景区启用且适用充值／回款场景的五种普通方式取交集，按配置排序；不混入待认领内部来源
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-01-S03 待认领入款核对支付候选全集和当前主体
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：待认领入款核对支付候选全集和当前主体
expected：仅景区启用且适用充值／回款场景的五种普通方式取交集，按配置排序；不混入待认领内部来源
actual：后台已启用且适用伙伴充值/回款的普通方式为现金1/扫码2/银行卡3/微信5/支付宝6；W03候选与排序一致，无内部待认领来源。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-01-S03
dependencies：
steps：待认领入款核对支付候选全集和当前主体
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅景区启用且适用充值／回款场景的五种普通方式取交集，按配置排序；不混入待认领内部来源
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-01-S04 公共临客回款核对支付候选全集和当前主体
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：公共临客回款核对支付候选全集和当前主体
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅景区启用且适用充值／回款场景的五种普通方式取交集，按配置排序；不混入待认领内部来源
actual：W06普通候选现金、扫码付、银行卡、微信、支付宝，当前账号及场景与后台配置交集一致，顺序1/2/3/5/6；待认领为单独内部来源。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-01-S04
dependencies：
steps：公共临客回款核对支付候选全集和当前主体
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅景区启用且适用充值／回款场景的五种普通方式取交集，按配置排序；不混入待认领内部来源
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-02 售票页长期充值：账号归属×扫码付×固定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:32:40.754Z
preconditions：全15账号及17窗口设备绑定原值已记录；两支付方式实际切固定模式，唯一默认绑定保存有效
steps：按设备归属逐项检查售票长期、列表长期、待认领、公共临客回款扫码及银行卡
改账号归属刷新后检查相同四入口双方式
恢复多资源、账号归属及所有原绑定，逐项比对原清单
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
actual：四入口双归属双方式16分支均真实点选：资源固定不可切换；售票/列表/待认领编号只读；临客回款资源名称与编号只读合并显示。设备银行卡为000QA1103POS01，账号银行卡POS-SK-02，扫码均为原默认柜台2。前导零保留，无跨主体兜底。未提交新交易。恢复多资源跟账号后15账号和17设备逐项文字比对原清单全部一致。
result：通过
businessIds：DD261114051751001001s
verification：W00
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-02
dependencies：
steps：售票页长期充值：账号归属×扫码付×固定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-02-S02 售票页长期充值：账号归属×银行卡×固定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:32:40.754Z
preconditions：全15账号及17窗口设备绑定原值已记录；两支付方式实际切固定模式，唯一默认绑定保存有效
steps：按设备归属逐项检查售票长期、列表长期、待认领、公共临客回款扫码及银行卡
改账号归属刷新后检查相同四入口双方式
恢复多资源、账号归属及所有原绑定，逐项比对原清单
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
actual：四入口双归属双方式16分支均真实点选：资源固定不可切换；售票/列表/待认领编号只读；临客回款资源名称与编号只读合并显示。设备银行卡为000QA1103POS01，账号银行卡POS-SK-02，扫码均为原默认柜台2。前导零保留，无跨主体兜底。未提交新交易。恢复多资源跟账号后15账号和17设备逐项文字比对原清单全部一致。
result：通过
businessIds：DD261114051751001001s
verification：W00
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-02-S02
dependencies：
steps：售票页长期充值：账号归属×银行卡×固定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-02-S03 售票页长期充值：设备归属×扫码付×固定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:32:40.754Z
preconditions：全15账号及17窗口设备绑定原值已记录；两支付方式实际切固定模式，唯一默认绑定保存有效
steps：按设备归属逐项检查售票长期、列表长期、待认领、公共临客回款扫码及银行卡
改账号归属刷新后检查相同四入口双方式
恢复多资源、账号归属及所有原绑定，逐项比对原清单
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
actual：四入口双归属双方式16分支均真实点选：资源固定不可切换；售票/列表/待认领编号只读；临客回款资源名称与编号只读合并显示。设备银行卡为000QA1103POS01，账号银行卡POS-SK-02，扫码均为原默认柜台2。前导零保留，无跨主体兜底。未提交新交易。恢复多资源跟账号后15账号和17设备逐项文字比对原清单全部一致。
result：通过
businessIds：DD261114051751001001s
verification：W00
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-02-S03
dependencies：
steps：售票页长期充值：设备归属×扫码付×固定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-02-S04 售票页长期充值：设备归属×银行卡×固定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:32:40.754Z
preconditions：全15账号及17窗口设备绑定原值已记录；两支付方式实际切固定模式，唯一默认绑定保存有效
steps：按设备归属逐项检查售票长期、列表长期、待认领、公共临客回款扫码及银行卡
改账号归属刷新后检查相同四入口双方式
恢复多资源、账号归属及所有原绑定，逐项比对原清单
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
actual：四入口双归属双方式16分支均真实点选：资源固定不可切换；售票/列表/待认领编号只读；临客回款资源名称与编号只读合并显示。设备银行卡为000QA1103POS01，账号银行卡POS-SK-02，扫码均为原默认柜台2。前导零保留，无跨主体兜底。未提交新交易。恢复多资源跟账号后15账号和17设备逐项文字比对原清单全部一致。
result：通过
businessIds：DD261114051751001001s
verification：W00
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-02-S04
dependencies：
steps：售票页长期充值：设备归属×银行卡×固定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-02-S05 列表行长期充值：账号归属×扫码付×固定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:32:40.754Z
preconditions：全15账号及17窗口设备绑定原值已记录；两支付方式实际切固定模式，唯一默认绑定保存有效
steps：按设备归属逐项检查售票长期、列表长期、待认领、公共临客回款扫码及银行卡
改账号归属刷新后检查相同四入口双方式
恢复多资源、账号归属及所有原绑定，逐项比对原清单
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
actual：四入口双归属双方式16分支均真实点选：资源固定不可切换；售票/列表/待认领编号只读；临客回款资源名称与编号只读合并显示。设备银行卡为000QA1103POS01，账号银行卡POS-SK-02，扫码均为原默认柜台2。前导零保留，无跨主体兜底。未提交新交易。恢复多资源跟账号后15账号和17设备逐项文字比对原清单全部一致。
result：通过
businessIds：DD261114051751001001s
verification：W01
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-02-S05
dependencies：
steps：列表行长期充值：账号归属×扫码付×固定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-02-S06 列表行长期充值：账号归属×银行卡×固定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:32:40.754Z
preconditions：全15账号及17窗口设备绑定原值已记录；两支付方式实际切固定模式，唯一默认绑定保存有效
steps：按设备归属逐项检查售票长期、列表长期、待认领、公共临客回款扫码及银行卡
改账号归属刷新后检查相同四入口双方式
恢复多资源、账号归属及所有原绑定，逐项比对原清单
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
actual：四入口双归属双方式16分支均真实点选：资源固定不可切换；售票/列表/待认领编号只读；临客回款资源名称与编号只读合并显示。设备银行卡为000QA1103POS01，账号银行卡POS-SK-02，扫码均为原默认柜台2。前导零保留，无跨主体兜底。未提交新交易。恢复多资源跟账号后15账号和17设备逐项文字比对原清单全部一致。
result：通过
businessIds：DD261114051751001001s
verification：W01
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-02-S06
dependencies：
steps：列表行长期充值：账号归属×银行卡×固定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-02-S07 列表行长期充值：设备归属×扫码付×固定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:32:40.754Z
preconditions：全15账号及17窗口设备绑定原值已记录；两支付方式实际切固定模式，唯一默认绑定保存有效
steps：按设备归属逐项检查售票长期、列表长期、待认领、公共临客回款扫码及银行卡
改账号归属刷新后检查相同四入口双方式
恢复多资源、账号归属及所有原绑定，逐项比对原清单
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
actual：四入口双归属双方式16分支均真实点选：资源固定不可切换；售票/列表/待认领编号只读；临客回款资源名称与编号只读合并显示。设备银行卡为000QA1103POS01，账号银行卡POS-SK-02，扫码均为原默认柜台2。前导零保留，无跨主体兜底。未提交新交易。恢复多资源跟账号后15账号和17设备逐项文字比对原清单全部一致。
result：通过
businessIds：DD261114051751001001s
verification：W01
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-02-S07
dependencies：
steps：列表行长期充值：设备归属×扫码付×固定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-02-S08 列表行长期充值：设备归属×银行卡×固定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:32:40.754Z
preconditions：全15账号及17窗口设备绑定原值已记录；两支付方式实际切固定模式，唯一默认绑定保存有效
steps：按设备归属逐项检查售票长期、列表长期、待认领、公共临客回款扫码及银行卡
改账号归属刷新后检查相同四入口双方式
恢复多资源、账号归属及所有原绑定，逐项比对原清单
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
actual：四入口双归属双方式16分支均真实点选：资源固定不可切换；售票/列表/待认领编号只读；临客回款资源名称与编号只读合并显示。设备银行卡为000QA1103POS01，账号银行卡POS-SK-02，扫码均为原默认柜台2。前导零保留，无跨主体兜底。未提交新交易。恢复多资源跟账号后15账号和17设备逐项文字比对原清单全部一致。
result：通过
businessIds：DD261114051751001001s
verification：W01
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-02-S08
dependencies：
steps：列表行长期充值：设备归属×银行卡×固定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-02-S09 待认领入款：账号归属×扫码付×固定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:32:40.754Z
preconditions：全15账号及17窗口设备绑定原值已记录；两支付方式实际切固定模式，唯一默认绑定保存有效
steps：按设备归属逐项检查售票长期、列表长期、待认领、公共临客回款扫码及银行卡
改账号归属刷新后检查相同四入口双方式
恢复多资源、账号归属及所有原绑定，逐项比对原清单
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
actual：四入口双归属双方式16分支均真实点选：资源固定不可切换；售票/列表/待认领编号只读；临客回款资源名称与编号只读合并显示。设备银行卡为000QA1103POS01，账号银行卡POS-SK-02，扫码均为原默认柜台2。前导零保留，无跨主体兜底。未提交新交易。恢复多资源跟账号后15账号和17设备逐项文字比对原清单全部一致。
result：通过
businessIds：DD261114051751001001s
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-02-S09
dependencies：
steps：待认领入款：账号归属×扫码付×固定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-02-S10 待认领入款：账号归属×银行卡×固定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:32:40.754Z
preconditions：全15账号及17窗口设备绑定原值已记录；两支付方式实际切固定模式，唯一默认绑定保存有效
steps：按设备归属逐项检查售票长期、列表长期、待认领、公共临客回款扫码及银行卡
改账号归属刷新后检查相同四入口双方式
恢复多资源、账号归属及所有原绑定，逐项比对原清单
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
actual：四入口双归属双方式16分支均真实点选：资源固定不可切换；售票/列表/待认领编号只读；临客回款资源名称与编号只读合并显示。设备银行卡为000QA1103POS01，账号银行卡POS-SK-02，扫码均为原默认柜台2。前导零保留，无跨主体兜底。未提交新交易。恢复多资源跟账号后15账号和17设备逐项文字比对原清单全部一致。
result：通过
businessIds：DD261114051751001001s
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-02-S10
dependencies：
steps：待认领入款：账号归属×银行卡×固定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-02-S11 待认领入款：设备归属×扫码付×固定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:32:40.754Z
preconditions：全15账号及17窗口设备绑定原值已记录；两支付方式实际切固定模式，唯一默认绑定保存有效
steps：按设备归属逐项检查售票长期、列表长期、待认领、公共临客回款扫码及银行卡
改账号归属刷新后检查相同四入口双方式
恢复多资源、账号归属及所有原绑定，逐项比对原清单
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
actual：四入口双归属双方式16分支均真实点选：资源固定不可切换；售票/列表/待认领编号只读；临客回款资源名称与编号只读合并显示。设备银行卡为000QA1103POS01，账号银行卡POS-SK-02，扫码均为原默认柜台2。前导零保留，无跨主体兜底。未提交新交易。恢复多资源跟账号后15账号和17设备逐项文字比对原清单全部一致。
result：通过
businessIds：DD261114051751001001s
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-02-S11
dependencies：
steps：待认领入款：设备归属×扫码付×固定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-02-S12 待认领入款：设备归属×银行卡×固定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:32:40.754Z
preconditions：全15账号及17窗口设备绑定原值已记录；两支付方式实际切固定模式，唯一默认绑定保存有效
steps：按设备归属逐项检查售票长期、列表长期、待认领、公共临客回款扫码及银行卡
改账号归属刷新后检查相同四入口双方式
恢复多资源、账号归属及所有原绑定，逐项比对原清单
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
actual：四入口双归属双方式16分支均真实点选：资源固定不可切换；售票/列表/待认领编号只读；临客回款资源名称与编号只读合并显示。设备银行卡为000QA1103POS01，账号银行卡POS-SK-02，扫码均为原默认柜台2。前导零保留，无跨主体兜底。未提交新交易。恢复多资源跟账号后15账号和17设备逐项文字比对原清单全部一致。
result：通过
businessIds：DD261114051751001001s
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-02-S12
dependencies：
steps：待认领入款：设备归属×银行卡×固定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-02-S13 公共临客回款：账号归属×扫码付×固定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:32:40.754Z
preconditions：全15账号及17窗口设备绑定原值已记录；两支付方式实际切固定模式，唯一默认绑定保存有效
steps：按设备归属逐项检查售票长期、列表长期、待认领、公共临客回款扫码及银行卡
改账号归属刷新后检查相同四入口双方式
恢复多资源、账号归属及所有原绑定，逐项比对原清单
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
actual：四入口双归属双方式16分支均真实点选：资源固定不可切换；售票/列表/待认领编号只读；临客回款资源名称与编号只读合并显示。设备银行卡为000QA1103POS01，账号银行卡POS-SK-02，扫码均为原默认柜台2。前导零保留，无跨主体兜底。未提交新交易。恢复多资源跟账号后15账号和17设备逐项文字比对原清单全部一致。
result：通过
businessIds：DD261114051751001001s
verification：W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-02-S13
dependencies：
steps：公共临客回款：账号归属×扫码付×固定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-02-S14 公共临客回款：账号归属×银行卡×固定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:32:40.754Z
preconditions：全15账号及17窗口设备绑定原值已记录；两支付方式实际切固定模式，唯一默认绑定保存有效
steps：按设备归属逐项检查售票长期、列表长期、待认领、公共临客回款扫码及银行卡
改账号归属刷新后检查相同四入口双方式
恢复多资源、账号归属及所有原绑定，逐项比对原清单
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
actual：四入口双归属双方式16分支均真实点选：资源固定不可切换；售票/列表/待认领编号只读；临客回款资源名称与编号只读合并显示。设备银行卡为000QA1103POS01，账号银行卡POS-SK-02，扫码均为原默认柜台2。前导零保留，无跨主体兜底。未提交新交易。恢复多资源跟账号后15账号和17设备逐项文字比对原清单全部一致。
result：通过
businessIds：DD261114051751001001s
verification：W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-02-S14
dependencies：
steps：公共临客回款：账号归属×银行卡×固定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-02-S15 公共临客回款：设备归属×扫码付×固定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:32:40.754Z
preconditions：全15账号及17窗口设备绑定原值已记录；两支付方式实际切固定模式，唯一默认绑定保存有效
steps：按设备归属逐项检查售票长期、列表长期、待认领、公共临客回款扫码及银行卡
改账号归属刷新后检查相同四入口双方式
恢复多资源、账号归属及所有原绑定，逐项比对原清单
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
actual：四入口双归属双方式16分支均真实点选：资源固定不可切换；售票/列表/待认领编号只读；临客回款资源名称与编号只读合并显示。设备银行卡为000QA1103POS01，账号银行卡POS-SK-02，扫码均为原默认柜台2。前导零保留，无跨主体兜底。未提交新交易。恢复多资源跟账号后15账号和17设备逐项文字比对原清单全部一致。
result：通过
businessIds：DD261114051751001001s
verification：W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-02-S15
dependencies：
steps：公共临客回款：设备归属×扫码付×固定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-02-S16 公共临客回款：设备归属×银行卡×固定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:32:40.754Z
preconditions：全15账号及17窗口设备绑定原值已记录；两支付方式实际切固定模式，唯一默认绑定保存有效
steps：按设备归属逐项检查售票长期、列表长期、待认领、公共临客回款扫码及银行卡
改账号归属刷新后检查相同四入口双方式
恢复多资源、账号归属及所有原绑定，逐项比对原清单
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
actual：四入口双归属双方式16分支均真实点选：资源固定不可切换；售票/列表/待认领编号只读；临客回款资源名称与编号只读合并显示。设备银行卡为000QA1103POS01，账号银行卡POS-SK-02，扫码均为原默认柜台2。前导零保留，无跨主体兜底。未提交新交易。恢复多资源跟账号后15账号和17设备逐项文字比对原清单全部一致。
result：通过
businessIds：DD261114051751001001s
verification：W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-02-S16
dependencies：
steps：公共临客回款：设备归属×银行卡×固定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅绑定有效唯一资源只读，编号自动带出只读；不跨主体兜底
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-03 售票页长期充值：账号归属×扫码付×多资源
范围：本期必测
结果：通过
原因：R10真实回归：扫码搜1号仅剩散客1号柜台码，选中编号CCB-SK-011；银行卡搜POS01仅剩QA-PAY-20261103-R01-POS01，编号000QA1103POS01；搜索、切换与前导零保留。
runId：R01
executedAt：2026-11-14T02:31:24.344999+08:00
preconditions：同一HTTP QA TEST窗口ystceshi；当前账号绑定多资源；本轮自建G伙伴
steps：售票页长期充值：账号归属×扫码付×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：W02当前账号归属、多资源，扫码付正确带出默认且能点击切换资源/同步只读编号；但下拉组合输入readonly/unselectable、无其他搜索框，不能按名称搜索。
result：有问题
businessIds：
verification：W00
W02
evidence：evidence/PM-BUG-004-多资源选择器无搜索输入.png
issueIds：PM-BUG-004
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：扫码搜1号仅剩散客1号柜台码，选中编号CCB-SK-011；银行卡搜POS01仅剩QA-PAY-20261103-R01-POS01，编号000QA1103POS01；搜索、切换与前导零保留。
result：通过
businessIds：
verification：W00
W02
evidence：
issueIds：PM-BUG-004
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-03
dependencies：
steps：售票页长期充值：账号归属×扫码付×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-03-S02 售票页长期充值：账号归属×银行卡×多资源
范围：本期必测
结果：通过
原因：R10真实回归：扫码搜1号仅剩散客1号柜台码，选中编号CCB-SK-011；银行卡搜POS01仅剩QA-PAY-20261103-R01-POS01，编号000QA1103POS01；搜索、切换与前导零保留。
runId：R01
executedAt：2026-11-14T02:31:24.344999+08:00
preconditions：同一HTTP QA TEST窗口ystceshi；当前账号绑定多资源；本轮自建G伙伴
steps：售票页长期充值：账号归属×银行卡×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：W02当前账号归属、多资源，银行卡正确带出默认且能点击切换资源/同步只读编号；但下拉组合输入readonly/unselectable、无其他搜索框，不能按名称搜索。
result：有问题
businessIds：
verification：W00
W02
evidence：evidence/PM-BUG-004-多资源选择器无搜索输入.png
issueIds：PM-BUG-004
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：扫码搜1号仅剩散客1号柜台码，选中编号CCB-SK-011；银行卡搜POS01仅剩QA-PAY-20261103-R01-POS01，编号000QA1103POS01；搜索、切换与前导零保留。
result：通过
businessIds：
verification：W00
W02
evidence：
issueIds：PM-BUG-004
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-03-S02
dependencies：
steps：售票页长期充值：账号归属×银行卡×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-03-S03 售票页长期充值：设备归属×扫码付×多资源
范围：本期必测
结果：通过
原因：R10真实回归：设备归属扫码：售票入口搜索1号筛出散客1号柜台码并选中；POS设备归属当前缺有效默认，选择器禁用并提示默认资源不可用，尚未有多POS搜索样本。
runId：R01
executedAt：2026-11-14T04:01:13.678574+08:00
preconditions：全局资源归属临时设备；扫码沿原两资源默认2；银行卡临时绑定R01/R04并默认R01；完整刷新窗口
steps：售票页长期充值：设备归属×扫码付×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：售票页长期G使用设备归属扫码付多资源：默认正确取当前设备指定项，候选仅该设备绑定两项，切换后编号同步，编号前导零保留。资源combobox的DOM只读readOnly=true，无可输入名称搜索。已逐入口检查并取消，无本批财务提交。扫码默认散客2号，切散客1号同步CCB-SK-011。
result：有问题
businessIds：22222222222
A3618964766937858049
verification：W00
W02
evidence：evidence/PM-BUG-004-售票设备多POS无搜索.png
issueIds：PM-BUG-004
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：设备归属扫码：售票入口搜索1号筛出散客1号柜台码并选中；POS设备归属当前缺有效默认，选择器禁用并提示默认资源不可用，尚未有多POS搜索样本。
result：通过
businessIds：
verification：W00
W02
evidence：
issueIds：PM-BUG-004
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-03-S03
dependencies：
steps：售票页长期充值：设备归属×扫码付×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-03-S04 售票页长期充值：设备归属×银行卡×多资源
范围：本期必测
结果：通过
原因：R10真实回归：售票页刷新后设备归属POS默认000QA1103POS01；搜索POS-02筛选唯一候选，选中编号POS-SK-02正确。
runId：R01
executedAt：2026-11-14T04:01:13.678574+08:00
preconditions：全局资源归属临时设备；扫码沿原两资源默认2；银行卡临时绑定R01/R04并默认R01；完整刷新窗口
steps：售票页长期充值：设备归属×银行卡×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：售票页长期G使用设备归属银行卡多资源：默认正确取当前设备指定项，候选仅该设备绑定两项，切换后编号同步，编号前导零保留。资源combobox的DOM只读readOnly=true，无可输入名称搜索。已逐入口检查并取消，无本批财务提交。银行卡默认QA-PAY-20261103-R01-POS01/000QA1103POS01，切R04-POS-A同步000QA1103R04P。
result：有问题
businessIds：22222222222
A3618964766937858049
verification：W00
W02
evidence：evidence/PM-BUG-004-售票设备多POS无搜索.png
issueIds：PM-BUG-004
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：售票页刷新后设备归属POS默认000QA1103POS01；搜索POS-02筛选唯一候选，选中编号POS-SK-02正确。
result：通过
businessIds：
verification：W00
W02
evidence：
issueIds：PM-BUG-004
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-03-S04
dependencies：
steps：售票页长期充值：设备归属×银行卡×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-03-S05 列表行长期充值：账号归属×扫码付×多资源
范围：本期必测
结果：通过
原因：R10真实回归：扫码输入1号仅剩散客1号柜台码，选中可切换；银行卡输入POS01仅剩QA-PAY-20261103-R01-POS01，编号000QA1103POS01；其他入口/设备绑定分支待补。
runId：R01
executedAt：2026-11-14T02:33:39.315317+08:00
preconditions：QA TEST列表行自建G账户，跟账号多资源，YST收银员
steps：列表行长期充值：账号归属×扫码付×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：列表行W02 扫码付默认及2个候选与YST账号绑定一致，可点选切换且编号更新只读；combobox readonly/unselectable无可编辑搜索框，复现PM-BUG-004。
result：有问题
businessIds：A3618964766937858049
verification：W01
W02
evidence：
issueIds：PM-BUG-004
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：扫码输入1号仅剩散客1号柜台码，选中可切换；银行卡输入POS01仅剩QA-PAY-20261103-R01-POS01，编号000QA1103POS01；其他入口/设备绑定分支待补。
result：通过
businessIds：
verification：W01
W02
evidence：
issueIds：PM-BUG-004
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-03-S05
dependencies：
steps：列表行长期充值：账号归属×扫码付×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-03-S06 列表行长期充值：账号归属×银行卡×多资源
范围：本期必测
结果：通过
原因：R10真实回归：扫码输入1号仅剩散客1号柜台码，选中可切换；银行卡输入POS01仅剩QA-PAY-20261103-R01-POS01，编号000QA1103POS01；其他入口/设备绑定分支待补。
runId：R01
executedAt：2026-11-14T02:33:39.315317+08:00
preconditions：QA TEST列表行自建G账户，跟账号多资源，YST收银员
steps：列表行长期充值：账号归属×银行卡×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：列表行W02 银行卡默认及2个候选与YST账号绑定一致，可点选切换且编号更新只读；combobox readonly/unselectable无可编辑搜索框，复现PM-BUG-004。
result：有问题
businessIds：A3618964766937858049
verification：W01
W02
evidence：
issueIds：PM-BUG-004
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：扫码输入1号仅剩散客1号柜台码，选中可切换；银行卡输入POS01仅剩QA-PAY-20261103-R01-POS01，编号000QA1103POS01；其他入口/设备绑定分支待补。
result：通过
businessIds：
verification：W01
W02
evidence：
issueIds：PM-BUG-004
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-03-S06
dependencies：
steps：列表行长期充值：账号归属×银行卡×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-03-S07 列表行长期充值：设备归属×扫码付×多资源
范围：本期必测
结果：通过
原因：R10真实回归：设备归属列表W02扫码搜索2号筛出并切换CCB-SK-012121212121212；银行卡默认000QA1103POS01，搜索POS-02只显示散客POS-02，选择后POS-SK-02正确。
runId：R01
executedAt：2026-11-14T02:36:55.968153+08:00
preconditions：扫码付临时跟设备多资源，设备默认1号，账号默认2号；后台重开确认保存值
steps：列表行长期充值：设备归属×扫码付×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：整页刷新后列表W02采用设备默认1号，候选仅原设备绑定1/2，可点击切到2且编码同步只读；组合输入readonly，无名称搜索。
result：有问题
businessIds：A3618964766937858049
verification：W01
W02
evidence：
issueIds：PM-BUG-004
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：设备归属列表W02扫码搜索2号筛出并切换CCB-SK-012121212121212；银行卡默认000QA1103POS01，搜索POS-02只显示散客POS-02，选择后POS-SK-02正确。
result：通过
businessIds：
verification：W01
W02
evidence：
issueIds：PM-BUG-004
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-03-S07
dependencies：
steps：列表行长期充值：设备归属×扫码付×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-03-S08 列表行长期充值：设备归属×银行卡×多资源
范围：本期必测
结果：通过
原因：R10真实回归：设备归属列表W02扫码搜索2号筛出并切换CCB-SK-012121212121212；银行卡默认000QA1103POS01，搜索POS-02只显示散客POS-02，选择后POS-SK-02正确。
runId：R01
executedAt：2026-11-14T04:01:13.678574+08:00
preconditions：全局资源归属临时设备；扫码沿原两资源默认2；银行卡临时绑定R01/R04并默认R01；完整刷新窗口
steps：列表行长期充值：设备归属×银行卡×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：列表行长期G使用设备归属银行卡多资源：默认正确取当前设备指定项，候选仅该设备绑定两项，切换后编号同步，编号前导零保留。资源combobox的DOM只读readOnly=true，无可输入名称搜索。已逐入口检查并取消，无本批财务提交。银行卡默认QA-PAY-20261103-R01-POS01/000QA1103POS01，切R04-POS-A同步000QA1103R04P。
result：有问题
businessIds：22222222222
A3618964766937858049
verification：W01
W02
evidence：evidence/PM-BUG-004-售票设备多POS无搜索.png
issueIds：PM-BUG-004
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：设备归属列表W02扫码搜索2号筛出并切换CCB-SK-012121212121212；银行卡默认000QA1103POS01，搜索POS-02只显示散客POS-02，选择后POS-SK-02正确。
result：通过
businessIds：
verification：W01
W02
evidence：
issueIds：PM-BUG-004
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-03-S08
dependencies：
steps：列表行长期充值：设备归属×银行卡×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-03-S09 待认领入款：账号归属×扫码付×多资源
范围：本期必测
结果：通过
原因：R10真实回归：待认领账号归属扫码搜索1号、POS搜索POS01分别筛出唯一候选，选中编号CCB-SK-011/000QA1103POS01正确，取消草稿。
runId：R01
executedAt：2026-11-14T02:38:46.104740+08:00
preconditions：同一QA TEST账号绑定多资源、配置已恢复跟账号
steps：待认领入款：账号归属×扫码付×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：W03账号扫码多资源默认2，候选1/2可切换，编号联动只读；组合框readonly不能名称搜索。
result：有问题
businessIds：RG3618985296881532930
verification：W03
evidence：
issueIds：PM-BUG-004
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：待认领账号归属扫码搜索1号、POS搜索POS01分别筛出唯一候选，选中编号CCB-SK-011/000QA1103POS01正确，取消草稿。
result：通过
businessIds：
verification：W03
evidence：
issueIds：PM-BUG-004
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-03-S09
dependencies：
steps：待认领入款：账号归属×扫码付×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-03-S10 待认领入款：账号归属×银行卡×多资源
范围：本期必测
结果：通过
原因：R10真实回归：待认领账号归属扫码搜索1号、POS搜索POS01分别筛出唯一候选，选中编号CCB-SK-011/000QA1103POS01正确，取消草稿。
runId：R01
executedAt：2026-11-14T02:38:46.104740+08:00
preconditions：同一QA TEST账号绑定多资源、配置已恢复跟账号
steps：待认领入款：账号归属×银行卡×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：W03账号POS多资源默认POS02，候选POS02及QA-PAY-R01-POS01可切换，编号只读；组合框readonly不能名称搜索。
result：有问题
businessIds：RG3618985296881532930
verification：W03
evidence：
issueIds：PM-BUG-004
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：待认领账号归属扫码搜索1号、POS搜索POS01分别筛出唯一候选，选中编号CCB-SK-011/000QA1103POS01正确，取消草稿。
result：通过
businessIds：
verification：W03
evidence：
issueIds：PM-BUG-004
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-03-S10
dependencies：
steps：待认领入款：账号归属×银行卡×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-03-S11 待认领入款：设备归属×扫码付×多资源
范围：本期必测
结果：通过
原因：R10真实回归：待认领设备归属，扫码默认1号可搜索2号并选中；POS默认000QA1103POS01可搜POS-02，选中POS-SK-02。草稿取消。
runId：R01
executedAt：2026-11-14T04:01:13.678574+08:00
preconditions：全局资源归属临时设备；扫码沿原两资源默认2；银行卡临时绑定R01/R04并默认R01；完整刷新窗口
steps：待认领入款：设备归属×扫码付×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：待认领入款使用设备归属扫码付多资源：默认正确取当前设备指定项，候选仅该设备绑定两项，切换后编号同步，编号前导零保留。资源combobox的DOM只读readOnly=true，无可输入名称搜索。已逐入口检查并取消，无本批财务提交。扫码默认散客2号，切散客1号同步CCB-SK-011。
result：有问题
businessIds：22222222222
A3597284940257984512
verification：W03
evidence：evidence/PM-BUG-004-售票设备多POS无搜索.png
issueIds：PM-BUG-004
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：待认领设备归属，扫码默认1号可搜索2号并选中；POS默认000QA1103POS01可搜POS-02，选中POS-SK-02。草稿取消。
result：通过
businessIds：
verification：W03
evidence：
issueIds：PM-BUG-004
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-03-S11
dependencies：
steps：待认领入款：设备归属×扫码付×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-03-S12 待认领入款：设备归属×银行卡×多资源
范围：本期必测
结果：通过
原因：R10真实回归：待认领设备归属，扫码默认1号可搜索2号并选中；POS默认000QA1103POS01可搜POS-02，选中POS-SK-02。草稿取消。
runId：R01
executedAt：2026-11-14T04:01:13.678574+08:00
preconditions：全局资源归属临时设备；扫码沿原两资源默认2；银行卡临时绑定R01/R04并默认R01；完整刷新窗口
steps：待认领入款：设备归属×银行卡×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：待认领入款使用设备归属银行卡多资源：默认正确取当前设备指定项，候选仅该设备绑定两项，切换后编号同步，编号前导零保留。资源combobox的DOM只读readOnly=true，无可输入名称搜索。已逐入口检查并取消，无本批财务提交。银行卡默认QA-PAY-20261103-R01-POS01/000QA1103POS01，切R04-POS-A同步000QA1103R04P。
result：有问题
businessIds：22222222222
A3597284940257984512
verification：W03
evidence：evidence/PM-BUG-004-售票设备多POS无搜索.png
issueIds：PM-BUG-004
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：待认领设备归属，扫码默认1号可搜索2号并选中；POS默认000QA1103POS01可搜POS-02，选中POS-SK-02。草稿取消。
result：通过
businessIds：
verification：W03
evidence：
issueIds：PM-BUG-004
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-03-S12
dependencies：
steps：待认领入款：设备归属×银行卡×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-03-S13 公共临客回款：账号归属×扫码付×多资源
范围：本期必测
结果：通过
原因：R10真实回归：W06恢复账号归属，新开草稿：搜索1号唯一扫码候选CCB-SK-011，POS01唯一候选000QA1103POS01，选中正确，取消不入账。
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：公共临客回款：账号归属×扫码付×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：W06账号归属多资源默认及候选与YST绑定一致，扫码1/2、银行卡POS02/QA-PAY-R01-POS01均可切换且带正确不可编辑编号。combobox readonly，没有名称搜索。
result：有问题
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W05
W06
evidence：
issueIds：PM-BUG-004
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：W06恢复账号归属，新开草稿：搜索1号唯一扫码候选CCB-SK-011，POS01唯一候选000QA1103POS01，选中正确，取消不入账。
result：通过
businessIds：
verification：W05
W06
evidence：
issueIds：PM-BUG-004
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-03-S13
dependencies：
steps：公共临客回款：账号归属×扫码付×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-03-S14 公共临客回款：账号归属×银行卡×多资源
范围：本期必测
结果：通过
原因：R10真实回归：W06恢复账号归属，新开草稿：搜索1号唯一扫码候选CCB-SK-011，POS01唯一候选000QA1103POS01，选中正确，取消不入账。
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：公共临客回款：账号归属×银行卡×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：W06账号归属多资源默认及候选与YST绑定一致，扫码1/2、银行卡POS02/QA-PAY-R01-POS01均可切换且带正确不可编辑编号。combobox readonly，没有名称搜索。
result：有问题
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W05
W06
evidence：
issueIds：PM-BUG-004
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：W06恢复账号归属，新开草稿：搜索1号唯一扫码候选CCB-SK-011，POS01唯一候选000QA1103POS01，选中正确，取消不入账。
result：通过
businessIds：
verification：W05
W06
evidence：
issueIds：PM-BUG-004
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-03-S14
dependencies：
steps：公共临客回款：账号归属×银行卡×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-03-S15 公共临客回款：设备归属×扫码付×多资源
范围：本期必测
结果：通过
原因：R10真实回归：W06设备归属扫码搜索2号及POS搜索POS-02唯一候选，选中均带正确编号，草稿取消；只读使用既有未回款订单DD261124124036001001s，未提交未改状态。
runId：R01
executedAt：2026-11-14T04:01:13.678574+08:00
preconditions：全局资源归属临时设备；扫码沿原两资源默认2；银行卡临时绑定R01/R04并默认R01；完整刷新窗口
steps：公共临客回款：设备归属×扫码付×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：公共回款T使用设备归属扫码付多资源：默认正确取当前设备指定项，候选仅该设备绑定两项，切换后编号同步，编号前导零保留。资源combobox的DOM只读readOnly=true，无可输入名称搜索。已逐入口检查并取消，无本批财务提交。扫码默认散客2号，切散客1号同步CCB-SK-011。
result：有问题
businessIds：22222222222
DD261114035057001001s
verification：W05
W06
evidence：evidence/PM-BUG-004-售票设备多POS无搜索.png
issueIds：PM-BUG-004
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：W06设备归属扫码搜索2号及POS搜索POS-02唯一候选，选中均带正确编号，草稿取消；只读使用既有未回款订单DD261124124036001001s，未提交未改状态。
result：通过
businessIds：
verification：W05
W06
evidence：
issueIds：PM-BUG-004
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-03-S15
dependencies：
steps：公共临客回款：设备归属×扫码付×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-03-S16 公共临客回款：设备归属×银行卡×多资源
范围：本期必测
结果：通过
原因：R10真实回归：W06设备归属扫码搜索2号及POS搜索POS-02唯一候选，选中均带正确编号，草稿取消；只读使用既有未回款订单DD261124124036001001s，未提交未改状态。
runId：R01
executedAt：2026-11-14T04:01:13.678574+08:00
preconditions：全局资源归属临时设备；扫码沿原两资源默认2；银行卡临时绑定R01/R04并默认R01；完整刷新窗口
steps：公共临客回款：设备归属×银行卡×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：公共回款T使用设备归属银行卡多资源：默认正确取当前设备指定项，候选仅该设备绑定两项，切换后编号同步，编号前导零保留。资源combobox的DOM只读readOnly=true，无可输入名称搜索。已逐入口检查并取消，无本批财务提交。银行卡默认QA-PAY-20261103-R01-POS01/000QA1103POS01，切R04-POS-A同步000QA1103R04P。
result：有问题
businessIds：22222222222
DD261114035057001001s
verification：W05
W06
evidence：evidence/PM-BUG-004-售票设备多POS无搜索.png
issueIds：PM-BUG-004
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
actual：W06设备归属扫码搜索2号及POS搜索POS-02唯一候选，选中均带正确编号，草稿取消；只读使用既有未回款订单DD261124124036001001s，未提交未改状态。
result：通过
businessIds：
verification：W05
W06
evidence：
issueIds：PM-BUG-004
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-03-S16
dependencies：
steps：公共临客回款：设备归属×银行卡×多资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：取有效指定默认，按名称搜索仅当前绑定可用候选；切换后编号同步且只读；不跨主体兜底
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04 W02的扫码付使用专属测试绑定构造无绑定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:54:16.891839+08:00
preconditions：使用本轮订单及来源。缺绑定仅临时清本轮YST团队设备扫码绑定，扫码归属设备；不改其他设备或账号。
steps：按对应分支记录操作
核对提示、金额和适用回查位置
恢复设备原两扫码柜台默认2及全局跟收银账号
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：W02售票G充值选择扫码付、填写0.01，空设备绑定时扫码仍checked、资源下拉disabled、编号—，提示默认收款资源不可用，确认disabled；手动换微信后确认enabled，随后取消。
result：通过
businessIds：
verification：W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04
dependencies：
steps：W02的扫码付使用专属测试绑定构造无绑定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S02 W02的扫码付使用专属测试绑定构造默认资源失效
范围：本期必测
结果：阻塞
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
steps：W02的扫码付使用专属测试绑定构造默认资源失效
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：正常停用扫码2及POS02均因账号/设备已绑定被拒绝；清空编号保存均被必填保护拒绝，草稿已取消。未实际构造出失效默认资源或空编号配置，不把保护验证冒充下游12分支通过。其他缺绑定、失效方式、固定/多资源分支已实际执行。
result：阻塞
verification：W02
businessIds：
evidence：
issueIds：
blockerIds：ENV-005
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S02
dependencies：
steps：W02的扫码付使用专属测试绑定构造默认资源失效
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S03 W02的扫码付使用专属测试绑定构造编号为空
范围：本期必测
结果：阻塞
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
steps：W02的扫码付使用专属测试绑定构造编号为空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：正常停用扫码2及POS02均因账号/设备已绑定被拒绝；清空编号保存均被必填保护拒绝，草稿已取消。未实际构造出失效默认资源或空编号配置，不把保护验证冒充下游12分支通过。其他缺绑定、失效方式、固定/多资源分支已实际执行。
result：阻塞
verification：W02
businessIds：
evidence：
issueIds：
blockerIds：ENV-005
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S03
dependencies：
steps：W02的扫码付使用专属测试绑定构造编号为空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S04 W02的银行卡使用专属测试绑定构造无绑定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:57:52.087710+08:00
preconditions：扫码付及银行卡临时切设备归属；YST团队售票设备银行卡绑定为空；当前窗口已完整刷新配置
steps：W02的银行卡使用专属测试绑定构造无绑定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：W02列表G充值：设备归属时当前设备银行卡可用POS为空；选银行卡后资源禁用、POS编号—，显示默认收款资源不可用并禁用确认；仍保持银行卡，不跨用账号POS、不自动现金。手动切现金填0.01后找零0且确认可用，取消未提交。
result：通过
businessIds：A3618964766937858049
verification：W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S04
dependencies：
steps：W02的银行卡使用专属测试绑定构造无绑定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S05 W02的银行卡使用专属测试绑定构造默认资源失效
范围：本期必测
结果：阻塞
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
steps：W02的银行卡使用专属测试绑定构造默认资源失效
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：正常停用扫码2及POS02均因账号/设备已绑定被拒绝；清空编号保存均被必填保护拒绝，草稿已取消。未实际构造出失效默认资源或空编号配置，不把保护验证冒充下游12分支通过。其他缺绑定、失效方式、固定/多资源分支已实际执行。
result：阻塞
verification：W02
businessIds：
evidence：
issueIds：
blockerIds：ENV-005
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S05
dependencies：
steps：W02的银行卡使用专属测试绑定构造默认资源失效
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S06 W02的银行卡使用专属测试绑定构造编号为空
范围：本期必测
结果：阻塞
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
steps：W02的银行卡使用专属测试绑定构造编号为空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：正常停用扫码2及POS02均因账号/设备已绑定被拒绝；清空编号保存均被必填保护拒绝，草稿已取消。未实际构造出失效默认资源或空编号配置，不把保护验证冒充下游12分支通过。其他缺绑定、失效方式、固定/多资源分支已实际执行。
result：阻塞
verification：W02
businessIds：
evidence：
issueIds：
blockerIds：ENV-005
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S06
dependencies：
steps：W02的银行卡使用专属测试绑定构造编号为空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S07 W03的扫码付使用专属测试绑定构造无绑定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:54:16.891839+08:00
preconditions：使用本轮订单及来源。缺绑定仅临时清本轮YST团队设备扫码绑定，扫码归属设备；不改其他设备或账号。
steps：按对应分支记录操作
核对提示、金额和适用回查位置
恢复设备原两扫码柜台默认2及全局跟收银账号
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：W03待认领入款选择扫码付、金额0.01，提示默认收款资源不可用、确认disabled；仍保留扫码未自动跳现金，手动换微信确认enabled，随后取消。
result：通过
businessIds：
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S07
dependencies：
steps：W03的扫码付使用专属测试绑定构造无绑定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S08 W03的扫码付使用专属测试绑定构造默认资源失效
范围：本期必测
结果：阻塞
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
steps：W03的扫码付使用专属测试绑定构造默认资源失效
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：正常停用扫码2及POS02均因账号/设备已绑定被拒绝；清空编号保存均被必填保护拒绝，草稿已取消。未实际构造出失效默认资源或空编号配置，不把保护验证冒充下游12分支通过。其他缺绑定、失效方式、固定/多资源分支已实际执行。
result：阻塞
verification：W03
businessIds：
evidence：
issueIds：
blockerIds：ENV-005
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S08
dependencies：
steps：W03的扫码付使用专属测试绑定构造默认资源失效
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S09 W03的扫码付使用专属测试绑定构造编号为空
范围：本期必测
结果：阻塞
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
steps：W03的扫码付使用专属测试绑定构造编号为空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：正常停用扫码2及POS02均因账号/设备已绑定被拒绝；清空编号保存均被必填保护拒绝，草稿已取消。未实际构造出失效默认资源或空编号配置，不把保护验证冒充下游12分支通过。其他缺绑定、失效方式、固定/多资源分支已实际执行。
result：阻塞
verification：W03
businessIds：
evidence：
issueIds：
blockerIds：ENV-005
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S09
dependencies：
steps：W03的扫码付使用专属测试绑定构造编号为空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S10 W03的银行卡使用专属测试绑定构造无绑定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:57:52.087710+08:00
preconditions：扫码付及银行卡临时切设备归属；YST团队售票设备银行卡绑定为空；当前窗口已完整刷新配置
steps：W03的银行卡使用专属测试绑定构造无绑定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：W03待认领充值：设备无银行卡绑定，选银行卡后资源禁用、编号—，明确提示默认资源不可用，确认禁用且不自动改现金；手动现金0.01可继续，取消后重开余额仍0.03，未提交。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S10
dependencies：
steps：W03的银行卡使用专属测试绑定构造无绑定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S11 W03的银行卡使用专属测试绑定构造默认资源失效
范围：本期必测
结果：阻塞
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
steps：W03的银行卡使用专属测试绑定构造默认资源失效
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：正常停用扫码2及POS02均因账号/设备已绑定被拒绝；清空编号保存均被必填保护拒绝，草稿已取消。未实际构造出失效默认资源或空编号配置，不把保护验证冒充下游12分支通过。其他缺绑定、失效方式、固定/多资源分支已实际执行。
result：阻塞
verification：W03
businessIds：
evidence：
issueIds：
blockerIds：ENV-005
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S11
dependencies：
steps：W03的银行卡使用专属测试绑定构造默认资源失效
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S12 W03的银行卡使用专属测试绑定构造编号为空
范围：本期必测
结果：阻塞
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
steps：W03的银行卡使用专属测试绑定构造编号为空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：正常停用扫码2及POS02均因账号/设备已绑定被拒绝；清空编号保存均被必填保护拒绝，草稿已取消。未实际构造出失效默认资源或空编号配置，不把保护验证冒充下游12分支通过。其他缺绑定、失效方式、固定/多资源分支已实际执行。
result：阻塞
verification：W03
businessIds：
evidence：
issueIds：
blockerIds：ENV-005
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S12
dependencies：
steps：W03的银行卡使用专属测试绑定构造编号为空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S13 W06的扫码付使用专属测试绑定构造无绑定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:54:16.891839+08:00
preconditions：使用本轮订单及来源。缺绑定仅临时清本轮YST团队设备扫码绑定，扫码归属设备；不改其他设备或账号。
steps：按对应分支记录操作
核对提示、金额和适用回查位置
恢复设备原两扫码柜台默认2及全局跟收银账号
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：W06本轮X订单0.01正常回款弹窗选择扫码，空设备绑定时提示默认资源不可用、确认回款disabled；扫码选择保留，手动换微信确认enabled，随后取消并清选择，X仍未回款。
result：通过
businessIds：DD261114045301002001s
verification：W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S13
dependencies：
steps：W06的扫码付使用专属测试绑定构造无绑定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S14 W06的扫码付使用专属测试绑定构造默认资源失效
范围：本期必测
结果：阻塞
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
steps：W06的扫码付使用专属测试绑定构造默认资源失效
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：正常停用扫码2及POS02均因账号/设备已绑定被拒绝；清空编号保存均被必填保护拒绝，草稿已取消。未实际构造出失效默认资源或空编号配置，不把保护验证冒充下游12分支通过。其他缺绑定、失效方式、固定/多资源分支已实际执行。
result：阻塞
verification：W06
businessIds：
evidence：
issueIds：
blockerIds：ENV-005
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S14
dependencies：
steps：W06的扫码付使用专属测试绑定构造默认资源失效
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S15 W06的扫码付使用专属测试绑定构造编号为空
范围：本期必测
结果：阻塞
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
steps：W06的扫码付使用专属测试绑定构造编号为空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：正常停用扫码2及POS02均因账号/设备已绑定被拒绝；清空编号保存均被必填保护拒绝，草稿已取消。未实际构造出失效默认资源或空编号配置，不把保护验证冒充下游12分支通过。其他缺绑定、失效方式、固定/多资源分支已实际执行。
result：阻塞
verification：W06
businessIds：
evidence：
issueIds：
blockerIds：ENV-005
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S15
dependencies：
steps：W06的扫码付使用专属测试绑定构造编号为空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S16 W06的银行卡使用专属测试绑定构造无绑定
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:57:52.087710+08:00
preconditions：扫码付及银行卡临时切设备归属；YST团队售票设备银行卡绑定为空；当前窗口已完整刷新配置
steps：W06的银行卡使用专属测试绑定构造无绑定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：W06本轮T订单0.01：设备无银行卡绑定时保持银行卡并提示默认资源不可用，确认回款禁用；手动现金实收0.01后找零0、确认可用；取消回到待回款T仍未回款，无提交。
result：通过
businessIds：DD261114035057001001s
verification：W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S16
dependencies：
steps：W06的银行卡使用专属测试绑定构造无绑定
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S17 W06的银行卡使用专属测试绑定构造默认资源失效
范围：本期必测
结果：阻塞
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
steps：W06的银行卡使用专属测试绑定构造默认资源失效
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：正常停用扫码2及POS02均因账号/设备已绑定被拒绝；清空编号保存均被必填保护拒绝，草稿已取消。未实际构造出失效默认资源或空编号配置，不把保护验证冒充下游12分支通过。其他缺绑定、失效方式、固定/多资源分支已实际执行。
result：阻塞
verification：W06
businessIds：
evidence：
issueIds：
blockerIds：ENV-005
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S17
dependencies：
steps：W06的银行卡使用专属测试绑定构造默认资源失效
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-04-S18 W06的银行卡使用专属测试绑定构造编号为空
范围：本期必测
结果：阻塞
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
steps：W06的银行卡使用专属测试绑定构造编号为空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
actual：正常停用扫码2及POS02均因账号/设备已绑定被拒绝；清空编号保存均被必填保护拒绝，草稿已取消。未实际构造出失效默认资源或空编号配置，不把保护验证冒充下游12分支通过。其他缺绑定、失效方式、固定/多资源分支已实际执行。
result：阻塞
verification：W06
businessIds：
evidence：
issueIds：
blockerIds：ENV-005
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-04-S18
dependencies：
steps：W06的银行卡使用专属测试绑定构造编号为空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已加载数据下明确提示并禁止确认，可手动换其他有效方式，不自动跳现金；无法经正常配置准备则记录受限原因，不绕保护
verification：W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-05 售票页长期充值以扫码付带前导零编号完成本轮交易
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:38:37.259195
preconditions：当前账号扫码默认资源2，临时改编号000QA1114SCANZERO；正常UI四入口独立交易各0.01，无真实游客资料
steps：各入口填合法金额和独立备注，选择扫码确认当前资源及编号
提交正常交易后查窗口列表及详情、后台列表及详情
资源编号恢复后重开历史详情，回查前导零未变化
expected：在适用前后台详情回查实际资源、名称和文本编号，前导零不丢；页面不显示ID时不宣称已核实数据库ID
actual：本分支单号RG3619106655477448706，0.01充值成功，前台资源名称散客2号柜台码测试测试测试测试，前后台列表及详情均保留完整000QA1114SCANZERO。原资源编号已恢复CCB-SK-012121212121212；重新打开历史详情仍保存前导零。后台只显示编号，无资源名称或内部ID字段，不宣称数据库校验。G两笔0.01累计余额0.06，待认领入款后0.04；临客W订单0.01已回款。
result：通过
businessIds：RG3619106655477448706
verification：W00
W02
W12
W13
B05
B08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-05
dependencies：
steps：售票页长期充值以扫码付带前导零编号完成本轮交易
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：在适用前后台详情回查实际资源、名称和文本编号，前导零不丢；页面不显示ID时不宣称已核实数据库ID
verification：W00
W02
W12
W13
B05
B08
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-05-S02 售票页长期充值以银行卡带前导零编号完成本轮交易
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:31:24.344999+08:00
preconditions：同一HTTP QA TEST窗口ystceshi；当前账号绑定多资源；本轮自建G伙伴
steps：售票页长期充值以银行卡带前导零编号完成本轮交易
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：在适用前后台详情回查实际资源、名称和文本编号，前导零不丢；页面不显示ID时不宣称已核实数据库ID
actual：本轮银行卡充值0.01成功，RG3618974714082115586，G预付款-0.02→-0.01。手选QA-PAY-20261103-R01-POS01；窗口详情显示资源名及000QA1103POS01，后台充值列表与详情编号保留相同前导零。后台不显示资源ID/名称，不宣称数据库核验。购物车保留。
result：通过
businessIds：RG3618974714082115586
A3618964766937858049
verification：W00
W02
W12
W13
B05
B08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-05-S02
dependencies：
steps：售票页长期充值以银行卡带前导零编号完成本轮交易
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：在适用前后台详情回查实际资源、名称和文本编号，前导零不丢；页面不显示ID时不宣称已核实数据库ID
verification：W00
W02
W12
W13
B05
B08
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-05-S03 列表行长期充值以扫码付带前导零编号完成本轮交易
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:38:37.259201
preconditions：当前账号扫码默认资源2，临时改编号000QA1114SCANZERO；正常UI四入口独立交易各0.01，无真实游客资料
steps：各入口填合法金额和独立备注，选择扫码确认当前资源及编号
提交正常交易后查窗口列表及详情、后台列表及详情
资源编号恢复后重开历史详情，回查前导零未变化
expected：在适用前后台详情回查实际资源、名称和文本编号，前导零不丢；页面不显示ID时不宣称已核实数据库ID
actual：本分支单号RG3619105470066475010，0.01充值成功，前台资源名称散客2号柜台码测试测试测试测试，前后台列表及详情均保留完整000QA1114SCANZERO。原资源编号已恢复CCB-SK-012121212121212；重新打开历史详情仍保存前导零。后台只显示编号，无资源名称或内部ID字段，不宣称数据库校验。G两笔0.01累计余额0.06，待认领入款后0.04；临客W订单0.01已回款。
result：通过
businessIds：RG3619105470066475010
verification：W01
W02
W12
W13
B05
B08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-05-S03
dependencies：
steps：列表行长期充值以扫码付带前导零编号完成本轮交易
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：在适用前后台详情回查实际资源、名称和文本编号，前导零不丢；页面不显示ID时不宣称已核实数据库ID
verification：W01
W02
W12
W13
B05
B08
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-05-S04 列表行长期充值以银行卡带前导零编号完成本轮交易
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:33:39.315317+08:00
preconditions：QA TEST列表行自建G账户，跟账号多资源，YST收银员
steps：列表行长期充值以银行卡带前导零编号完成本轮交易
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：在适用前后台详情回查实际资源、名称和文本编号，前导零不丢；页面不显示ID时不宣称已核实数据库ID
actual：列表行银行卡充值0.01，RG3618980125740908546；G预付款-0.01→0.00。前后台列表及详情000QA1103POS01保持前导零，窗口资源名QA-PAY-20261103-R01-POS01正确，后台无资源ID显示不宣称数据库核验。
result：通过
businessIds：A3618964766937858049
RG3618980125740908546
verification：W01
W02
W12
W13
B05
B08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-05-S04
dependencies：
steps：列表行长期充值以银行卡带前导零编号完成本轮交易
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：在适用前后台详情回查实际资源、名称和文本编号，前导零不丢；页面不显示ID时不宣称已核实数据库ID
verification：W01
W02
W12
W13
B05
B08
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-05-S05 待认领入款以扫码付带前导零编号完成本轮交易
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:38:37.259203
preconditions：当前账号扫码默认资源2，临时改编号000QA1114SCANZERO；正常UI四入口独立交易各0.01，无真实游客资料
steps：各入口填合法金额和独立备注，选择扫码确认当前资源及编号
提交正常交易后查窗口列表及详情、后台列表及详情
资源编号恢复后重开历史详情，回查前导零未变化
expected：在适用前后台详情回查实际资源、名称和文本编号，前导零不丢；页面不显示ID时不宣称已核实数据库ID
actual：本分支单号RG3619106157261242370，0.01充值成功，前台资源名称散客2号柜台码测试测试测试测试，前后台列表及详情均保留完整000QA1114SCANZERO。原资源编号已恢复CCB-SK-012121212121212；重新打开历史详情仍保存前导零。后台只显示编号，无资源名称或内部ID字段，不宣称数据库校验。G两笔0.01累计余额0.06，待认领入款后0.04；临客W订单0.01已回款。
result：通过
businessIds：RG3619106157261242370
verification：W03
W12
W13
B05
B08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-05-S05
dependencies：
steps：待认领入款以扫码付带前导零编号完成本轮交易
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：在适用前后台详情回查实际资源、名称和文本编号，前导零不丢；页面不显示ID时不宣称已核实数据库ID
verification：W03
W12
W13
B05
B08
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-05-S06 待认领入款以银行卡带前导零编号完成本轮交易
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:38:46.104740+08:00
preconditions：同一QA TEST账号绑定多资源、配置已恢复跟账号
steps：待认领入款以银行卡带前导零编号完成本轮交易
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：在适用前后台详情回查实际资源、名称和文本编号，前导零不丢；页面不显示ID时不宣称已核实数据库ID
actual：W03本轮银行卡0.02充值RG3618985296881532930，原余额0.04→0.06。窗口资源名QA-PAY-20261103-R01-POS01，前后台列表/详情000QA1103POS01完整。支付日13日00:00，申请完成14日02:37:49，成功未使用。
result：通过
businessIds：RG3618985296881532930
verification：W03
W12
W13
B05
B08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-05-S06
dependencies：
steps：待认领入款以银行卡带前导零编号完成本轮交易
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：在适用前后台详情回查实际资源、名称和文本编号，前导零不丢；页面不显示ID时不宣称已核实数据库ID
verification：W03
W12
W13
B05
B08
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-05-S07 公共临客回款以扫码付带前导零编号完成本轮交易
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:38:37.259204
preconditions：当前账号扫码默认资源2，临时改编号000QA1114SCANZERO；正常UI四入口独立交易各0.01，无真实游客资料
steps：各入口填合法金额和独立备注，选择扫码确认当前资源及编号
提交正常交易后查窗口列表及详情、后台列表及详情
资源编号恢复后重开历史详情，回查前导零未变化
expected：在适用前后台详情回查实际资源、名称和文本编号，前导零不丢；页面不显示ID时不宣称已核实数据库ID
actual：本分支单号RG3619107840888422402，0.01充值成功，前台资源名称散客2号柜台码测试测试测试测试，前后台列表及详情均保留完整000QA1114SCANZERO。原资源编号已恢复CCB-SK-012121212121212；重新打开历史详情仍保存前导零。后台只显示编号，无资源名称或内部ID字段，不宣称数据库校验。G两笔0.01累计余额0.06，待认领入款后0.04；临客W订单0.01已回款。
result：通过
businessIds：RG3619107840888422402
DD261114043607001001s
verification：W05
W06
W12
W13
B05
B08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-05-S07
dependencies：
steps：公共临客回款以扫码付带前导零编号完成本轮交易
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：在适用前后台详情回查实际资源、名称和文本编号，前导零不丢；页面不显示ID时不宣称已核实数据库ID
verification：W05
W06
W12
W13
B05
B08
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

### PM-005-05-S08 公共临客回款以银行卡带前导零编号完成本轮交易
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:36:14.189435+08:00
preconditions：本轮O/P各0.01临客挂帐订单，客户与负责人不同，仅测试数据
steps：公共临客回款以银行卡带前导零编号完成本轮交易
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：在适用前后台详情回查实际资源、名称和文本编号，前导零不丢；页面不显示ID时不宣称已核实数据库ID
actual：W06选择银行卡资源QA-PAY-20261103-R01-POS01，完成OP两单回款0.02。窗口详情、已回款两行和后台列表/详情均保留文本编号000QA1103POS01；窗口详情保留资源名称，页面未展示数据库资源ID，未宣称核实。14日报表银行卡列该POS金额0.04（原0.02+本次0.02），公共临客充值0.10、其他收入0.02，总计300.14；企业N迁移不计入实收。
result：通过
businessIds：DD261114033256001001s
DD261114033330001001s
RG3619044034854273026
verification：W05
W06
W12
W13
B05
B08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-005-05-S08
dependencies：
steps：公共临客回款以银行卡带前导零编号完成本轮交易
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：在适用前后台详情回查实际资源、名称和文本编号，前导零不丢；页面不显示ID时不宣称已核实数据库ID
verification：W05
W06
W12
W13
B05
B08
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B08
path：../development-spec.html#B08

## PM-006 现金与其他普通方式
模块：支付与日期
预期：不足拦截，足额可确认，找零正确；找零和公司收入各自正确，不相互混算；按现有确认流程成功，不出现不适用资源字段
当前：通过

### PM-006-01 W02现金输入实收低于应收
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：W02现金输入实收低于应收
expected：禁止确认，差额准确
actual：W02列表行长期充值金额100、其他收入0、实收99时确认禁用；未提交。
result：通过
businessIds：A3606358539707891713
verification：W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-01
dependencies：PM-001
steps：W02现金输入实收低于应收
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：禁止确认，差额准确
verification：W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-01-S02 W02现金输入实收等于应收
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：W02现金输入实收等于应收
expected：可继续正常提交，找零0
actual：W02实收从99纠正100，找零0、合计100且按钮启用；旧实收不足提示仍显示。
result：有问题
businessIds：A3606358539707891713
verification：W02
evidence：evidence/PM-BUG-001-现金纠正后旧校验残留.png
issueIds：PM-BUG-001
runId：R06
executedAt：2026-11-14T15:56:22.419158+08:00
preconditions：独立HTTP QA标签，YST售票窗口，全新普通AA与待认领充值弹窗；仅输入校验不提交
steps：W02现金输入实收等于应收
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可继续正常提交，找零0
actual：R06独立新标签YST售票窗口回归：待认领充值金额0→0.01移开焦点后，旧提示清除、合计0.01、找零0且确认启用；W02普通AA及W03待认领现金应收100，实收99先触发不足提示，分别纠正100/150并移开焦点后，校验完成时提示消失、找零0/50、可继续。普通150一次瞬时读取尚有旧提示，后续读取已清除，不能认定持续残留。未点击确认充值，草稿已取消。不推定开发修复，撤销此前持续残留判断。
result：通过
businessIds：
verification：W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-01-S02
dependencies：PM-001
steps：W02现金输入实收等于应收
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可继续正常提交，找零0
verification：W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-01-S03 W02现金输入实收高于应收
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：W02现金输入实收高于应收
expected：找零=实收−登记应收，不能自动变其他收入
actual：W02充值100、其他收入0、实收150，找零50合计100；旧实收不足提示仍显示。
result：有问题
businessIds：A3606358539707891713
verification：W02
evidence：evidence/PM-BUG-001-现金纠正后旧校验残留.png
issueIds：PM-BUG-001
runId：R06
executedAt：2026-11-14T15:56:22.419158+08:00
preconditions：独立HTTP QA标签，YST售票窗口，全新普通AA与待认领充值弹窗；仅输入校验不提交
steps：W02现金输入实收高于应收
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：找零=实收−登记应收，不能自动变其他收入
actual：R06独立新标签YST售票窗口回归：待认领充值金额0→0.01移开焦点后，旧提示清除、合计0.01、找零0且确认启用；W02普通AA及W03待认领现金应收100，实收99先触发不足提示，分别纠正100/150并移开焦点后，校验完成时提示消失、找零0/50、可继续。普通150一次瞬时读取尚有旧提示，后续读取已清除，不能认定持续残留。未点击确认充值，草稿已取消。不推定开发修复，撤销此前持续残留判断。
result：通过
businessIds：
verification：W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-01-S03
dependencies：PM-001
steps：W02现金输入实收高于应收
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：找零=实收−登记应收，不能自动变其他收入
verification：W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-01-S04 W03现金输入实收低于应收
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：W03现金输入实收低于应收
expected：禁止确认，差额准确
actual：W03金额100、实收99，确认禁用并提示实收不得低于合计；未提交。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-01-S04
dependencies：PM-001
steps：W03现金输入实收低于应收
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：禁止确认，差额准确
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-01-S05 W03现金输入实收等于应收
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：W03现金输入实收等于应收
expected：可继续正常提交，找零0
actual：W03金额100、实收由99改100，找零0合计100且按钮启用，旧实收不足提示残留。
result：有问题
businessIds：A3597284940257984512
verification：W03
evidence：evidence/PM-BUG-001-现金纠正后旧校验残留.png
issueIds：PM-BUG-001
runId：R06
executedAt：2026-11-14T15:56:22.419158+08:00
preconditions：独立HTTP QA标签，YST售票窗口，全新普通AA与待认领充值弹窗；仅输入校验不提交
steps：W03现金输入实收等于应收
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可继续正常提交，找零0
actual：R06独立新标签YST售票窗口回归：待认领充值金额0→0.01移开焦点后，旧提示清除、合计0.01、找零0且确认启用；W02普通AA及W03待认领现金应收100，实收99先触发不足提示，分别纠正100/150并移开焦点后，校验完成时提示消失、找零0/50、可继续。普通150一次瞬时读取尚有旧提示，后续读取已清除，不能认定持续残留。未点击确认充值，草稿已取消。不推定开发修复，撤销此前持续残留判断。
result：通过
businessIds：
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-01-S05
dependencies：PM-001
steps：W03现金输入实收等于应收
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可继续正常提交，找零0
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-01-S06 W03现金输入实收高于应收
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：W03现金输入实收高于应收
expected：找零=实收−登记应收，不能自动变其他收入
actual：W03金额100、实收150，找零50、合计100、无其他收入字段；旧实收不足提示残留。
result：有问题
businessIds：A3597284940257984512
verification：W03
evidence：evidence/PM-BUG-001-现金纠正后旧校验残留.png
issueIds：PM-BUG-001
runId：R06
executedAt：2026-11-14T15:56:22.419158+08:00
preconditions：独立HTTP QA标签，YST售票窗口，全新普通AA与待认领充值弹窗；仅输入校验不提交
steps：W03现金输入实收高于应收
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：找零=实收−登记应收，不能自动变其他收入
actual：R06独立新标签YST售票窗口回归：待认领充值金额0→0.01移开焦点后，旧提示清除、合计0.01、找零0且确认启用；W02普通AA及W03待认领现金应收100，实收99先触发不足提示，分别纠正100/150并移开焦点后，校验完成时提示消失、找零0/50、可继续。普通150一次瞬时读取尚有旧提示，后续读取已清除，不能认定持续残留。未点击确认充值，草稿已取消。不推定开发修复，撤销此前持续残留判断。
result：通过
businessIds：
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-01-S06
dependencies：PM-001
steps：W03现金输入实收高于应收
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：找零=实收−登记应收，不能自动变其他收入
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-01-S07 W06现金输入实收低于应收
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:50:08.812873+08:00
preconditions：本轮R/S各0.01临客订单，客户名称及负责人不同；未使用历史订单
steps：W06现金输入实收低于应收
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：禁止确认，差额准确
actual：W06应回款0.02、现金实收0.01，确认回款禁用，找零无有效值；改0.02恢复可提交，尚未实际回款。
result：通过
businessIds：DD261114034441001001s
DD261114034513001001s
A3619058259785957377
RG3619058259785957383
MG9d908d1fbac53676d7df668658c1
verification：W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-01-S07
dependencies：PM-001
steps：W06现金输入实收低于应收
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：禁止确认，差额准确
verification：W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-01-S08 W06现金输入实收等于应收
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：W06现金输入实收等于应收
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可继续正常提交，找零0
actual：D=S=0.02，现金实收0.02，找零0.00，确认可用；在实收0.01禁止状态纠正后无旧错误。未以本样本现金提交，后续使用POS来源结清。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-01-S08
dependencies：PM-001
steps：W06现金输入实收等于应收
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可继续正常提交，找零0
verification：W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-01-S09 W06现金输入实收高于应收
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：W06现金输入实收高于应收
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：找零=实收−登记应收，不能自动变其他收入
actual：D=S=0.02，现金实收0.03，找零0.01，总登记仍0.02，未将现金超收自动计其他收入；确认可用，未提交现金。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-01-S09
dependencies：PM-001
steps：W06现金输入实收高于应收
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：找零=实收−登记应收，不能自动变其他收入
verification：W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-02 W02登记客户100＋收入20，现金实收150
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:57:06.575583+08:00
preconditions：QA TEST本轮自建G伙伴，预付款余额从0.00开始；后台西瓜／窗口YST分别操作
steps：W02登记客户100＋收入20，现金实收150
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：总登记120、找零30、公司收入20，两个金额不混算
actual：本轮按最小实际金额代入C0.01+I0.01，现金实收0.03：合计登记0.02、找零0.01、公司收入0.01分开计算。G余额仅0.01→0.02；客户充值+0.01，公司收入+0.01，前后台详情及互查相符。
result：通过
businessIds：RG3619003799600644098
RG3619003799600644100
verification：W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-02
dependencies：PM-001
steps：W02登记客户100＋收入20，现金实收150
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：总登记120、找零30、公司收入20，两个金额不混算
verification：W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-02-S02 W06登记客户100＋收入20，现金实收150
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:50:47.992971+08:00
preconditions：本轮K两票0.02，独立QA标签正常退一票0.01；旧回款弹窗保留退款前0.02
steps：W06登记客户100＋收入20，现金实收150
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：总登记120、找零30、公司收入20，两个金额不混算
actual：本轮代入D0.01+其他收入0.01，登记S0.02，现金实收0.03：总登记0.02、找零0.01、公司收入0.01互不混算。剩余金额处理初始空、未选择禁确认；主动选计其他收入后成功，后台客户+0.01及公司收入+0.01各一笔。
result：通过
businessIds：DD261114024642001001s
LYAS3618996377808863232
RG3618997391509438466
RG3618997391509438468
verification：W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-02-S02
dependencies：PM-001
steps：W06登记客户100＋收入20，现金实收150
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：总登记120、找零30、公司收入20，两个金额不混算
verification：W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03 售票页长期充值切换现金
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:31:24.344999+08:00
preconditions：同一HTTP QA TEST窗口ystceshi；当前账号绑定多资源；本轮自建G伙伴
steps：售票页长期充值切换现金
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：W02依次切换现金→扫码付→银行卡→微信→支付宝。现金动态字段匹配；现金实收仅现金显示；扫码付为收款资源+只读柜台编码，银行卡为资源+只读POS编号；微信/支付宝无资源空槽。切离资源后字段消失，重开默认资源恢复；弹窗clientWidth=scrollWidth=940，无横向溢出。取消，无新增交易。
result：通过
businessIds：
verification：W00
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03
dependencies：PM-001
steps：售票页长期充值切换现金
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S02 售票页长期充值切换扫码付
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:31:24.344999+08:00
preconditions：同一HTTP QA TEST窗口ystceshi；当前账号绑定多资源；本轮自建G伙伴
steps：售票页长期充值切换扫码付
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：W02依次切换现金→扫码付→银行卡→微信→支付宝。扫码付动态字段匹配；现金实收仅现金显示；扫码付为收款资源+只读柜台编码，银行卡为资源+只读POS编号；微信/支付宝无资源空槽。切离资源后字段消失，重开默认资源恢复；弹窗clientWidth=scrollWidth=940，无横向溢出。取消，无新增交易。
result：通过
businessIds：
verification：W00
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S02
dependencies：PM-001
steps：售票页长期充值切换扫码付
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S03 售票页长期充值切换银行卡
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:31:24.344999+08:00
preconditions：同一HTTP QA TEST窗口ystceshi；当前账号绑定多资源；本轮自建G伙伴
steps：售票页长期充值切换银行卡
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：W02依次切换现金→扫码付→银行卡→微信→支付宝。银行卡动态字段匹配；现金实收仅现金显示；扫码付为收款资源+只读柜台编码，银行卡为资源+只读POS编号；微信/支付宝无资源空槽。切离资源后字段消失，重开默认资源恢复；弹窗clientWidth=scrollWidth=940，无横向溢出。取消，无新增交易。
result：通过
businessIds：
verification：W00
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S03
dependencies：PM-001
steps：售票页长期充值切换银行卡
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S04 售票页长期充值切换微信
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:31:24.344999+08:00
preconditions：同一HTTP QA TEST窗口ystceshi；当前账号绑定多资源；本轮自建G伙伴
steps：售票页长期充值切换微信
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：W02依次切换现金→扫码付→银行卡→微信→支付宝。微信动态字段匹配；现金实收仅现金显示；扫码付为收款资源+只读柜台编码，银行卡为资源+只读POS编号；微信/支付宝无资源空槽。切离资源后字段消失，重开默认资源恢复；弹窗clientWidth=scrollWidth=940，无横向溢出。取消，无新增交易。
result：通过
businessIds：
verification：W00
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S04
dependencies：PM-001
steps：售票页长期充值切换微信
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S05 售票页长期充值切换支付宝
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:31:24.344999+08:00
preconditions：同一HTTP QA TEST窗口ystceshi；当前账号绑定多资源；本轮自建G伙伴
steps：售票页长期充值切换支付宝
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：W02依次切换现金→扫码付→银行卡→微信→支付宝。支付宝动态字段匹配；现金实收仅现金显示；扫码付为收款资源+只读柜台编码，银行卡为资源+只读POS编号；微信/支付宝无资源空槽。切离资源后字段消失，重开默认资源恢复；弹窗clientWidth=scrollWidth=940，无横向溢出。取消，无新增交易。
result：通过
businessIds：
verification：W00
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S05
dependencies：PM-001
steps：售票页长期充值切换支付宝
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S06 列表行长期充值切换现金
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:33:39.315317+08:00
preconditions：QA TEST列表行自建G账户，跟账号多资源，YST收银员
steps：列表行长期充值切换现金
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：列表行W02五方式逐一切换，现金动态字段正确。现金仅实收/找零，扫码及银行卡显示资源+只读匹配编号，微信/支付宝无资源空槽；切离资源字段移除；clientWidth=scrollWidth=940。
result：通过
businessIds：A3618964766937858049
verification：W01
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S06
dependencies：PM-001
steps：列表行长期充值切换现金
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S07 列表行长期充值切换扫码付
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:33:39.315317+08:00
preconditions：QA TEST列表行自建G账户，跟账号多资源，YST收银员
steps：列表行长期充值切换扫码付
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：列表行W02五方式逐一切换，扫码付动态字段正确。现金仅实收/找零，扫码及银行卡显示资源+只读匹配编号，微信/支付宝无资源空槽；切离资源字段移除；clientWidth=scrollWidth=940。
result：通过
businessIds：A3618964766937858049
verification：W01
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S07
dependencies：PM-001
steps：列表行长期充值切换扫码付
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S08 列表行长期充值切换银行卡
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:33:39.315317+08:00
preconditions：QA TEST列表行自建G账户，跟账号多资源，YST收银员
steps：列表行长期充值切换银行卡
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：列表行W02五方式逐一切换，银行卡动态字段正确。现金仅实收/找零，扫码及银行卡显示资源+只读匹配编号，微信/支付宝无资源空槽；切离资源字段移除；clientWidth=scrollWidth=940。
result：通过
businessIds：A3618964766937858049
verification：W01
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S08
dependencies：PM-001
steps：列表行长期充值切换银行卡
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S09 列表行长期充值切换微信
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:33:39.315317+08:00
preconditions：QA TEST列表行自建G账户，跟账号多资源，YST收银员
steps：列表行长期充值切换微信
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：列表行W02五方式逐一切换，微信动态字段正确。现金仅实收/找零，扫码及银行卡显示资源+只读匹配编号，微信/支付宝无资源空槽；切离资源字段移除；clientWidth=scrollWidth=940。
result：通过
businessIds：A3618964766937858049
verification：W01
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S09
dependencies：PM-001
steps：列表行长期充值切换微信
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S10 列表行长期充值切换支付宝
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:33:39.315317+08:00
preconditions：QA TEST列表行自建G账户，跟账号多资源，YST收银员
steps：列表行长期充值切换支付宝
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：列表行W02五方式逐一切换，支付宝动态字段正确。现金仅实收/找零，扫码及银行卡显示资源+只读匹配编号，微信/支付宝无资源空槽；切离资源字段移除；clientWidth=scrollWidth=940。
result：通过
businessIds：A3618964766937858049
verification：W01
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S10
dependencies：PM-001
steps：列表行长期充值切换支付宝
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S11 待认领入款切换现金
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：待认领入款切换现金
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：W03正常切换现金：仅现金实收/找零，资源名称编号字段已移除。弹窗宽940，未见内部横向溢出；未提交。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S11
dependencies：PM-001
steps：待认领入款切换现金
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S12 待认领入款切换扫码付
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：待认领入款切换扫码付
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：W03正常切换扫码付：收款资源为散客2号柜台码测试测试测试测试，柜台编码CCB-SK-012121212121212只读。弹窗宽940，未见内部横向溢出；未提交。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S12
dependencies：PM-001
steps：待认领入款切换扫码付
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S13 待认领入款切换银行卡
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：待认领入款切换银行卡
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：W03正常切换银行卡：收款资源散客 POS-02，POS编号POS-SK-02只读。弹窗宽940，未见内部横向溢出；未提交。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S13
dependencies：PM-001
steps：待认领入款切换银行卡
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S14 待认领入款切换微信
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：待认领入款切换微信
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：W03正常切换微信：无资源名称/编号或现金实收空槽，旧资源字段已移除。弹窗宽940，未见内部横向溢出；未提交。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S14
dependencies：PM-001
steps：待认领入款切换微信
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S15 待认领入款切换支付宝
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:28:46+08:00
preconditions：QA TEST，同一指定窗口会话；独立检查标签，不触碰待接管200元表单
steps：待认领入款切换支付宝
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：W03正常切换支付宝：无资源名称/编号或现金实收空槽，旧资源字段已移除。弹窗宽940，未见内部横向溢出；未提交。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S15
dependencies：PM-001
steps：待认领入款切换支付宝
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S16 公共临客回款切换现金
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：公共临客回款切换现金
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：W06逐一切换五种普通方式，现金显示适用字段；现金找零、扫码/银行卡只读资源名称及编号显示，微信/支付宝无资源空槽，切离资源字段清除。clientWidth=scrollWidth=940。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S16
dependencies：PM-001
steps：公共临客回款切换现金
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S17 公共临客回款切换扫码付
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：公共临客回款切换扫码付
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：W06逐一切换五种普通方式，扫码付显示适用字段；现金找零、扫码/银行卡只读资源名称及编号显示，微信/支付宝无资源空槽，切离资源字段清除。clientWidth=scrollWidth=940。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S17
dependencies：PM-001
steps：公共临客回款切换扫码付
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S18 公共临客回款切换银行卡
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：公共临客回款切换银行卡
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：W06逐一切换五种普通方式，银行卡显示适用字段；现金找零、扫码/银行卡只读资源名称及编号显示，微信/支付宝无资源空槽，切离资源字段清除。clientWidth=scrollWidth=940。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S18
dependencies：PM-001
steps：公共临客回款切换银行卡
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S19 公共临客回款切换微信
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：公共临客回款切换微信
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：W06逐一切换五种普通方式，微信显示适用字段；现金找零、扫码/银行卡只读资源名称及编号显示，微信/支付宝无资源空槽，切离资源字段清除。clientWidth=scrollWidth=940。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S19
dependencies：PM-001
steps：公共临客回款切换微信
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-03-S20 公共临客回款切换支付宝
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：公共临客回款切换支付宝
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
actual：W06逐一切换五种普通方式，支付宝显示适用字段；现金找零、扫码/银行卡只读资源名称及编号显示，微信/支付宝无资源空槽，切离资源字段清除。clientWidth=scrollWidth=940。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-006-03-S20
dependencies：PM-001
steps：公共临客回款切换支付宝
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：动态字段与本方式匹配；现金／微信／支付宝无资源空槽；切离资源方式清旧草稿；按钮和下方字段无额外横向溢出
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05

### PM-006-INH-SALE-01 售票主页面固定合作伙伴充值：继承金额组合／两项均0
范围：本期必测
结果：通过
原因：
runId：R07
executedAt：2026-11-14T16:23:48+08:00
preconditions：独立HTTP QA，YST窗口，呀诺达TEST；伙伴QA-PM1114同名校验目标AA，账号A3619146993810292737
steps：从售票主页面固定合作伙伴充值打开充值，充值金额填0，计入其他收入填0，失焦后等待校验更新。
核对合计、现金实收不足/等额/超额及纠正后的提示和找零；正数合法样本按正常流程提交一次，零总额只校验后取消。
expected：合计0，禁止提交；提示两项至少一项大于0，不生成单据或账户变化。
actual：C=0、I=0，现金0.03；合计0，提示至少一项大于0且确认禁用，取消未提交。
result：通过
businessIds：
verification：W00/W01
窗口/后台充值记录与收入记录
资金流水
W16充值报表
B12对账单
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用本轮专属普通企业或个人合作伙伴及有效默认账户、现金方式；逐入口独立样本，先登记账户余额、充值及收入记录数。不得使用待认领W03代替。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM1114-INH-SALE-1
dependencies：
steps：从售票主页面固定合作伙伴充值打开充值，充值金额填0，计入其他收入填0，失焦后等待校验更新。
核对合计、现金实收不足/等额/超额及纠正后的提示和找零；正数合法样本按正常流程提交一次，零总额只校验后取消。
expected：合计0，禁止提交；提示两项至少一项大于0，不生成单据或账户变化。
verification：W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：本入口本组合实际执行并逐项回查；缺任何适用结果不得仅凭成功提示通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：V3.2原版充值规则与历史回归核对
path：上版继承规则与本轮漏测核对-20261114.md

### PM-006-INH-SALE-02 售票主页面固定合作伙伴充值：继承金额组合／仅账户充值
范围：本期必测
结果：通过
原因：
runId：R07
executedAt：2026-11-14T16:23:48+08:00
preconditions：独立HTTP QA，YST窗口，呀诺达TEST；伙伴QA-PM1114同名校验目标AA，账号A3619146993810292737
steps：从售票主页面固定合作伙伴充值打开充值，充值金额填0.02，计入其他收入填0，失焦后等待校验更新。
核对合计、现金实收不足/等额/超额及纠正后的提示和找零；正数合法样本按正常流程提交一次，零总额只校验后取消。
正数样本记录实际单号，刷新后核对账户增量、账户充值与独立收入记录及详情、资金流水、当前操作员充值报表和对账单；不将其他收入计入账户到款。
expected：合计0.02；现金实收0.03，找零0.01；仅账户增加0.02，无其他收入记录。
actual：C=0.02、I=0，现金0.03、找零0.01；充值RG3619836112723001346成功，账户增加0.02，无收入单。 前后台记录、详情及资金流水已回查；两入口累计充值0.08、收入0.04，W16净收合计0.12，B12到账0.08/预付余额0.07，收入不进入伙伴余额。
result：通过
businessIds：RG3619836112723001346
verification：W00/W01
窗口/后台充值记录与收入记录
资金流水
W16充值报表
B12对账单
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用本轮专属普通企业或个人合作伙伴及有效默认账户、现金方式；逐入口独立样本，先登记账户余额、充值及收入记录数。不得使用待认领W03代替。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM1114-INH-SALE-2
dependencies：
steps：从售票主页面固定合作伙伴充值打开充值，充值金额填0.02，计入其他收入填0，失焦后等待校验更新。
核对合计、现金实收不足/等额/超额及纠正后的提示和找零；正数合法样本按正常流程提交一次，零总额只校验后取消。
正数样本记录实际单号，刷新后核对账户增量、账户充值与独立收入记录及详情、资金流水、当前操作员充值报表和对账单；不将其他收入计入账户到款。
expected：合计0.02；现金实收0.03，找零0.01；仅账户增加0.02，无其他收入记录。
verification：W02
W13
W15
W16
B08
B10
B11
B12
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：本入口本组合实际执行并逐项回查；缺任何适用结果不得仅凭成功提示通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：V3.2原版充值规则与历史回归核对
path：上版继承规则与本轮漏测核对-20261114.md

### PM-006-INH-SALE-03 售票主页面固定合作伙伴充值：继承金额组合／仅其他收入
范围：本期必测
结果：通过
原因：R10真实回归：R10两入口各执行仅其他收入/充值加其他收入共4笔：其他收入各0.01，B11账户号/类型均—；W15亦—；W15售票组合收入RG3639041694646353924正确关联充值RG3639041694646353922；AA预付款只增加两笔充值共0.02，从0.07到0.09；W16充值0.02+其他收入0.04=0.06，总计含公共回款0.03为0.09，迁移调账未计实收。原4条历史收入行也已修正—。 B08新增仅两笔正充值RG3639041419768446978/RG3639041694646353922各0.01，没有0金额账户充值；B09四笔收入记录类型—；B12按日2026-11-27到账0.02、当前预付0.09，未把收入0.04计入到账。
runId：R07
executedAt：2026-11-14T16:23:48+08:00
preconditions：独立HTTP QA，YST窗口，呀诺达TEST；伙伴QA-PM1114同名校验目标AA，账号A3619146993810292737
steps：从售票主页面固定合作伙伴充值打开充值，充值金额填0，计入其他收入填0.01，失焦后等待校验更新。
核对合计、现金实收不足/等额/超额及纠正后的提示和找零；正数合法样本按正常流程提交一次，零总额只校验后取消。
正数样本记录实际单号，刷新后核对账户增量、账户充值与独立收入记录及详情、资金流水、当前操作员充值报表和对账单；不将其他收入计入账户到款。
expected：合计0.01；现金实收0.03，找零0.02；账户完全不变，不生成0金额账户充值；仅其他收入记录及流水0.01。
actual：C=0、I=0.01，现金0.03、找零0.02；收入RG3619836336061300738成功，账户余额不变，无零金额充值单。 前后台记录、详情及资金流水已回查；两入口累计充值0.08、收入0.04，W16净收合计0.12，B12到账0.08/预付余额0.07，收入不进入伙伴余额。 金额链路正确，但收入资金流水账户号错误显示伙伴账号，按统一字段回查判有问题，见PM-BUG-010；不是资金误入账。
result：有问题
businessIds：RG3619836336061300738
verification：W00/W01
窗口/后台充值记录与收入记录
资金流水
W16充值报表
B12对账单
evidence：evidence/PM-BUG-010-R07-其他收入流水账户号.png
issueIds：PM-BUG-010
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：合计0.01；现金实收0.03，找零0.02；账户完全不变，不生成0金额账户充值；仅其他收入记录及流水0.01。
actual：R10两入口各执行仅其他收入/充值加其他收入共4笔：其他收入各0.01，B11账户号/类型均—；W15亦—；W15售票组合收入RG3639041694646353924正确关联充值RG3639041694646353922；AA预付款只增加两笔充值共0.02，从0.07到0.09；W16充值0.02+其他收入0.04=0.06，总计含公共回款0.03为0.09，迁移调账未计实收。原4条历史收入行也已修正—。 B08新增仅两笔正充值RG3639041419768446978/RG3639041694646353922各0.01，没有0金额账户充值；B09四笔收入记录类型—；B12按日2026-11-27到账0.02、当前预付0.09，未把收入0.04计入到账。 B10抽查新收入RG3639041694646353924：账号/类型—，金额0.01，关联客户充值RG3639041694646353922、管理员及YST窗口与前台一致。
result：通过
businessIds：RG3639040492055511042
RG3639041419768446980
RG3639041694646353924
RG3639042021063868418
RG3639041419768446978
RG3639041694646353922
verification：W02
W13
W15
W16
B08
B10
B11
B12
evidence：
issueIds：PM-BUG-010
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用本轮专属普通企业或个人合作伙伴及有效默认账户、现金方式；逐入口独立样本，先登记账户余额、充值及收入记录数。不得使用待认领W03代替。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM1114-INH-SALE-3
dependencies：
steps：从售票主页面固定合作伙伴充值打开充值，充值金额填0，计入其他收入填0.01，失焦后等待校验更新。
核对合计、现金实收不足/等额/超额及纠正后的提示和找零；正数合法样本按正常流程提交一次，零总额只校验后取消。
正数样本记录实际单号，刷新后核对账户增量、账户充值与独立收入记录及详情、资金流水、当前操作员充值报表和对账单；不将其他收入计入账户到款。
expected：合计0.01；现金实收0.03，找零0.02；账户完全不变，不生成0金额账户充值；仅其他收入记录及流水0.01。
verification：W02
W13
W15
W16
B08
B10
B11
B12
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：本入口本组合实际执行并逐项回查；缺任何适用结果不得仅凭成功提示通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：V3.2原版充值规则与历史回归核对
path：上版继承规则与本轮漏测核对-20261114.md

### PM-006-INH-SALE-04 售票主页面固定合作伙伴充值：继承金额组合／账户充值加其他收入
范围：本期必测
结果：通过
原因：R10真实回归：R10两入口各执行仅其他收入/充值加其他收入共4笔：其他收入各0.01，B11账户号/类型均—；W15亦—；W15售票组合收入RG3639041694646353924正确关联充值RG3639041694646353922；AA预付款只增加两笔充值共0.02，从0.07到0.09；W16充值0.02+其他收入0.04=0.06，总计含公共回款0.03为0.09，迁移调账未计实收。原4条历史收入行也已修正—。 B08新增仅两笔正充值RG3639041419768446978/RG3639041694646353922各0.01，没有0金额账户充值；B09四笔收入记录类型—；B12按日2026-11-27到账0.02、当前预付0.09，未把收入0.04计入到账。
runId：R07
executedAt：2026-11-14T16:23:48+08:00
preconditions：独立HTTP QA，YST窗口，呀诺达TEST；伙伴QA-PM1114同名校验目标AA，账号A3619146993810292737
steps：从售票主页面固定合作伙伴充值打开充值，充值金额填0.02，计入其他收入填0.01，失焦后等待校验更新。
核对合计、现金实收不足/等额/超额及纠正后的提示和找零；正数合法样本按正常流程提交一次，零总额只校验后取消。
正数样本记录实际单号，刷新后核对账户增量、账户充值与独立收入记录及详情、资金流水、当前操作员充值报表和对账单；不将其他收入计入账户到款。
expected：合计0.03；实收0.02应拦截，改0.03后可继续且找零0，改0.05后找零0.02；账户仅增加0.02，独立其他收入0.01，实收净额与报表金额均0.03，不按现金实收0.05计入。
actual：C=0.02、I=0.01；现金0.02不足拦截，改0.03等待校验完成后清错/找零0/可确认，改0.05找零0.02提交成功。充值RG3619836696838553602=0.02，独立收入RG3619836696838553604=0.01，账户只增加0.02。 前后台记录、详情及资金流水已回查；两入口累计充值0.08、收入0.04，W16净收合计0.12，B12到账0.08/预付余额0.07，收入不进入伙伴余额。 金额链路正确，但收入资金流水账户号错误显示伙伴账号，按统一字段回查判有问题，见PM-BUG-010；不是资金误入账。
result：有问题
businessIds：RG3619836696838553602
RG3619836696838553604
verification：W00/W01
窗口/后台充值记录与收入记录
资金流水
W16充值报表
B12对账单
evidence：evidence/PM-BUG-010-R07-其他收入流水账户号.png
issueIds：PM-BUG-010
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：合计0.03；实收0.02应拦截，改0.03后可继续且找零0，改0.05后找零0.02；账户仅增加0.02，独立其他收入0.01，实收净额与报表金额均0.03，不按现金实收0.05计入。
actual：R10两入口各执行仅其他收入/充值加其他收入共4笔：其他收入各0.01，B11账户号/类型均—；W15亦—；W15售票组合收入RG3639041694646353924正确关联充值RG3639041694646353922；AA预付款只增加两笔充值共0.02，从0.07到0.09；W16充值0.02+其他收入0.04=0.06，总计含公共回款0.03为0.09，迁移调账未计实收。原4条历史收入行也已修正—。 B08新增仅两笔正充值RG3639041419768446978/RG3639041694646353922各0.01，没有0金额账户充值；B09四笔收入记录类型—；B12按日2026-11-27到账0.02、当前预付0.09，未把收入0.04计入到账。 B10抽查新收入RG3639041694646353924：账号/类型—，金额0.01，关联客户充值RG3639041694646353922、管理员及YST窗口与前台一致。
result：通过
businessIds：RG3639040492055511042
RG3639041419768446980
RG3639041694646353924
RG3639042021063868418
RG3639041419768446978
RG3639041694646353922
verification：W02
W13
W15
W16
B08
B10
B11
B12
evidence：
issueIds：PM-BUG-010
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用本轮专属普通企业或个人合作伙伴及有效默认账户、现金方式；逐入口独立样本，先登记账户余额、充值及收入记录数。不得使用待认领W03代替。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM1114-INH-SALE-4
dependencies：
steps：从售票主页面固定合作伙伴充值打开充值，充值金额填0.02，计入其他收入填0.01，失焦后等待校验更新。
核对合计、现金实收不足/等额/超额及纠正后的提示和找零；正数合法样本按正常流程提交一次，零总额只校验后取消。
正数样本记录实际单号，刷新后核对账户增量、账户充值与独立收入记录及详情、资金流水、当前操作员充值报表和对账单；不将其他收入计入账户到款。
expected：合计0.03；实收0.02应拦截，改0.03后可继续且找零0，改0.05后找零0.02；账户仅增加0.02，独立其他收入0.01，实收净额与报表金额均0.03，不按现金实收0.05计入。
verification：W02
W13
W15
W16
B08
B10
B11
B12
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：本入口本组合实际执行并逐项回查；缺任何适用结果不得仅凭成功提示通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：V3.2原版充值规则与历史回归核对
path：上版继承规则与本轮漏测核对-20261114.md

### PM-006-INH-LIST-01 合作伙伴列表行充值：继承金额组合／两项均0
范围：本期必测
结果：通过
原因：
runId：R07
executedAt：2026-11-14T16:23:48+08:00
preconditions：独立HTTP QA，YST窗口，呀诺达TEST；伙伴QA-PM1114同名校验目标AA，账号A3619146993810292737
steps：从合作伙伴列表行充值打开充值，充值金额填0，计入其他收入填0，失焦后等待校验更新。
核对合计、现金实收不足/等额/超额及纠正后的提示和找零；正数合法样本按正常流程提交一次，零总额只校验后取消。
expected：合计0，禁止提交；提示两项至少一项大于0，不生成单据或账户变化。
actual：C=0、I=0，现金0.03；合计0，提示至少一项大于0且确认禁用，取消未提交。
result：通过
businessIds：
verification：W02
窗口/后台充值记录与收入记录
资金流水
W16充值报表
B12对账单
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用本轮专属普通企业或个人合作伙伴及有效默认账户、现金方式；逐入口独立样本，先登记账户余额、充值及收入记录数。不得使用待认领W03代替。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM1114-INH-LIST-1
dependencies：
steps：从合作伙伴列表行充值打开充值，充值金额填0，计入其他收入填0，失焦后等待校验更新。
核对合计、现金实收不足/等额/超额及纠正后的提示和找零；正数合法样本按正常流程提交一次，零总额只校验后取消。
expected：合计0，禁止提交；提示两项至少一项大于0，不生成单据或账户变化。
verification：W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：本入口本组合实际执行并逐项回查；缺任何适用结果不得仅凭成功提示通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：V3.2原版充值规则与历史回归核对
path：上版继承规则与本轮漏测核对-20261114.md

### PM-006-INH-LIST-02 合作伙伴列表行充值：继承金额组合／仅账户充值
范围：本期必测
结果：通过
原因：
runId：R07
executedAt：2026-11-14T16:23:48+08:00
preconditions：独立HTTP QA，YST窗口，呀诺达TEST；伙伴QA-PM1114同名校验目标AA，账号A3619146993810292737
steps：从合作伙伴列表行充值打开充值，充值金额填0.02，计入其他收入填0，失焦后等待校验更新。
核对合计、现金实收不足/等额/超额及纠正后的提示和找零；正数合法样本按正常流程提交一次，零总额只校验后取消。
正数样本记录实际单号，刷新后核对账户增量、账户充值与独立收入记录及详情、资金流水、当前操作员充值报表和对账单；不将其他收入计入账户到款。
expected：合计0.02；现金实收0.03，找零0.01；仅账户增加0.02，无其他收入记录。
actual：C=0.02、I=0，现金0.03、找零0.01；充值RG3619833707541315586成功，账户增加0.02，无收入单。 前后台记录、详情及资金流水已回查；两入口累计充值0.08、收入0.04，W16净收合计0.12，B12到账0.08/预付余额0.07，收入不进入伙伴余额。
result：通过
businessIds：RG3619833707541315586
verification：W02
窗口/后台充值记录与收入记录
资金流水
W16充值报表
B12对账单
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用本轮专属普通企业或个人合作伙伴及有效默认账户、现金方式；逐入口独立样本，先登记账户余额、充值及收入记录数。不得使用待认领W03代替。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM1114-INH-LIST-2
dependencies：
steps：从合作伙伴列表行充值打开充值，充值金额填0.02，计入其他收入填0，失焦后等待校验更新。
核对合计、现金实收不足/等额/超额及纠正后的提示和找零；正数合法样本按正常流程提交一次，零总额只校验后取消。
正数样本记录实际单号，刷新后核对账户增量、账户充值与独立收入记录及详情、资金流水、当前操作员充值报表和对账单；不将其他收入计入账户到款。
expected：合计0.02；现金实收0.03，找零0.01；仅账户增加0.02，无其他收入记录。
verification：W02
W13
W15
W16
B08
B10
B11
B12
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：本入口本组合实际执行并逐项回查；缺任何适用结果不得仅凭成功提示通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：V3.2原版充值规则与历史回归核对
path：上版继承规则与本轮漏测核对-20261114.md

### PM-006-INH-LIST-03 合作伙伴列表行充值：继承金额组合／仅其他收入
范围：本期必测
结果：通过
原因：R10真实回归：R10两入口各执行仅其他收入/充值加其他收入共4笔：其他收入各0.01，B11账户号/类型均—；W15亦—；W15售票组合收入RG3639041694646353924正确关联充值RG3639041694646353922；AA预付款只增加两笔充值共0.02，从0.07到0.09；W16充值0.02+其他收入0.04=0.06，总计含公共回款0.03为0.09，迁移调账未计实收。原4条历史收入行也已修正—。 B08新增仅两笔正充值RG3639041419768446978/RG3639041694646353922各0.01，没有0金额账户充值；B09四笔收入记录类型—；B12按日2026-11-27到账0.02、当前预付0.09，未把收入0.04计入到账。
runId：R07
executedAt：2026-11-14T16:23:48+08:00
preconditions：独立HTTP QA，YST窗口，呀诺达TEST；伙伴QA-PM1114同名校验目标AA，账号A3619146993810292737
steps：从合作伙伴列表行充值打开充值，充值金额填0，计入其他收入填0.01，失焦后等待校验更新。
核对合计、现金实收不足/等额/超额及纠正后的提示和找零；正数合法样本按正常流程提交一次，零总额只校验后取消。
正数样本记录实际单号，刷新后核对账户增量、账户充值与独立收入记录及详情、资金流水、当前操作员充值报表和对账单；不将其他收入计入账户到款。
expected：合计0.01；现金实收0.03，找零0.02；账户完全不变，不生成0金额账户充值；仅其他收入记录及流水0.01。
actual：C=0、I=0.01，现金0.03、找零0.02；收入RG3619834033958830082成功，账户余额不变，无零金额充值单。 前后台记录、详情及资金流水已回查；两入口累计充值0.08、收入0.04，W16净收合计0.12，B12到账0.08/预付余额0.07，收入不进入伙伴余额。 金额链路正确，但收入资金流水账户号错误显示伙伴账号，按统一字段回查判有问题，见PM-BUG-010；不是资金误入账。
result：有问题
businessIds：RG3619834033958830082
verification：W02
窗口/后台充值记录与收入记录
资金流水
W16充值报表
B12对账单
evidence：evidence/PM-BUG-010-R07-其他收入流水账户号.png
issueIds：PM-BUG-010
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：合计0.01；现金实收0.03，找零0.02；账户完全不变，不生成0金额账户充值；仅其他收入记录及流水0.01。
actual：R10两入口各执行仅其他收入/充值加其他收入共4笔：其他收入各0.01，B11账户号/类型均—；W15亦—；W15售票组合收入RG3639041694646353924正确关联充值RG3639041694646353922；AA预付款只增加两笔充值共0.02，从0.07到0.09；W16充值0.02+其他收入0.04=0.06，总计含公共回款0.03为0.09，迁移调账未计实收。原4条历史收入行也已修正—。 B08新增仅两笔正充值RG3639041419768446978/RG3639041694646353922各0.01，没有0金额账户充值；B09四笔收入记录类型—；B12按日2026-11-27到账0.02、当前预付0.09，未把收入0.04计入到账。 B10抽查新收入RG3639041694646353924：账号/类型—，金额0.01，关联客户充值RG3639041694646353922、管理员及YST窗口与前台一致。
result：通过
businessIds：RG3639040492055511042
RG3639041419768446980
RG3639041694646353924
RG3639042021063868418
RG3639041419768446978
RG3639041694646353922
verification：W02
W13
W15
W16
B08
B10
B11
B12
evidence：
issueIds：PM-BUG-010
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用本轮专属普通企业或个人合作伙伴及有效默认账户、现金方式；逐入口独立样本，先登记账户余额、充值及收入记录数。不得使用待认领W03代替。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM1114-INH-LIST-3
dependencies：
steps：从合作伙伴列表行充值打开充值，充值金额填0，计入其他收入填0.01，失焦后等待校验更新。
核对合计、现金实收不足/等额/超额及纠正后的提示和找零；正数合法样本按正常流程提交一次，零总额只校验后取消。
正数样本记录实际单号，刷新后核对账户增量、账户充值与独立收入记录及详情、资金流水、当前操作员充值报表和对账单；不将其他收入计入账户到款。
expected：合计0.01；现金实收0.03，找零0.02；账户完全不变，不生成0金额账户充值；仅其他收入记录及流水0.01。
verification：W02
W13
W15
W16
B08
B10
B11
B12
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：本入口本组合实际执行并逐项回查；缺任何适用结果不得仅凭成功提示通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：V3.2原版充值规则与历史回归核对
path：上版继承规则与本轮漏测核对-20261114.md

### PM-006-INH-LIST-04 合作伙伴列表行充值：继承金额组合／账户充值加其他收入
范围：本期必测
结果：通过
原因：R10真实回归：R10两入口各执行仅其他收入/充值加其他收入共4笔：其他收入各0.01，B11账户号/类型均—；W15亦—；W15售票组合收入RG3639041694646353924正确关联充值RG3639041694646353922；AA预付款只增加两笔充值共0.02，从0.07到0.09；W16充值0.02+其他收入0.04=0.06，总计含公共回款0.03为0.09，迁移调账未计实收。原4条历史收入行也已修正—。 B08新增仅两笔正充值RG3639041419768446978/RG3639041694646353922各0.01，没有0金额账户充值；B09四笔收入记录类型—；B12按日2026-11-27到账0.02、当前预付0.09，未把收入0.04计入到账。
runId：R07
executedAt：2026-11-14T16:23:48+08:00
preconditions：独立HTTP QA，YST窗口，呀诺达TEST；伙伴QA-PM1114同名校验目标AA，账号A3619146993810292737
steps：从合作伙伴列表行充值打开充值，充值金额填0.02，计入其他收入填0.01，失焦后等待校验更新。
核对合计、现金实收不足/等额/超额及纠正后的提示和找零；正数合法样本按正常流程提交一次，零总额只校验后取消。
正数样本记录实际单号，刷新后核对账户增量、账户充值与独立收入记录及详情、资金流水、当前操作员充值报表和对账单；不将其他收入计入账户到款。
expected：合计0.03；实收0.02应拦截，改0.03后可继续且找零0，改0.05后找零0.02；账户仅增加0.02，独立其他收入0.01，实收净额与报表金额均0.03，不按现金实收0.05计入。
actual：C=0.02、I=0.01；现金0.02不足拦截，改0.03等待校验完成后清错/找零0/可确认，改0.05找零0.02提交成功。充值RG3619834360376344578=0.02，独立收入RG3619834360376344580=0.01，账户只增加0.02。 前后台记录、详情及资金流水已回查；两入口累计充值0.08、收入0.04，W16净收合计0.12，B12到账0.08/预付余额0.07，收入不进入伙伴余额。 金额链路正确，但收入资金流水账户号错误显示伙伴账号，按统一字段回查判有问题，见PM-BUG-010；不是资金误入账。
result：有问题
businessIds：RG3619834360376344578
RG3619834360376344580
verification：W02
窗口/后台充值记录与收入记录
资金流水
W16充值报表
B12对账单
evidence：evidence/PM-BUG-010-R07-其他收入流水账户号.png
issueIds：PM-BUG-010
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：合计0.03；实收0.02应拦截，改0.03后可继续且找零0，改0.05后找零0.02；账户仅增加0.02，独立其他收入0.01，实收净额与报表金额均0.03，不按现金实收0.05计入。
actual：R10两入口各执行仅其他收入/充值加其他收入共4笔：其他收入各0.01，B11账户号/类型均—；W15亦—；W15售票组合收入RG3639041694646353924正确关联充值RG3639041694646353922；AA预付款只增加两笔充值共0.02，从0.07到0.09；W16充值0.02+其他收入0.04=0.06，总计含公共回款0.03为0.09，迁移调账未计实收。原4条历史收入行也已修正—。 B08新增仅两笔正充值RG3639041419768446978/RG3639041694646353922各0.01，没有0金额账户充值；B09四笔收入记录类型—；B12按日2026-11-27到账0.02、当前预付0.09，未把收入0.04计入到账。 B10抽查新收入RG3639041694646353924：账号/类型—，金额0.01，关联客户充值RG3639041694646353922、管理员及YST窗口与前台一致。
result：通过
businessIds：RG3639040492055511042
RG3639041419768446980
RG3639041694646353924
RG3639042021063868418
RG3639041419768446978
RG3639041694646353922
verification：W02
W13
W15
W16
B08
B10
B11
B12
evidence：
issueIds：PM-BUG-010
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用本轮专属普通企业或个人合作伙伴及有效默认账户、现金方式；逐入口独立样本，先登记账户余额、充值及收入记录数。不得使用待认领W03代替。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM1114-INH-LIST-4
dependencies：
steps：从合作伙伴列表行充值打开充值，充值金额填0.02，计入其他收入填0.01，失焦后等待校验更新。
核对合计、现金实收不足/等额/超额及纠正后的提示和找零；正数合法样本按正常流程提交一次，零总额只校验后取消。
正数样本记录实际单号，刷新后核对账户增量、账户充值与独立收入记录及详情、资金流水、当前操作员充值报表和对账单；不将其他收入计入账户到款。
expected：合计0.03；实收0.02应拦截，改0.03后可继续且找零0，改0.05后找零0.02；账户仅增加0.02，独立其他收入0.01，实收净额与报表金额均0.03，不按现金实收0.05计入。
verification：W02
W13
W15
W16
B08
B10
B11
B12
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：本入口本组合实际执行并逐项回查；缺任何适用结果不得仅凭成功提示通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W05
path：../development-spec.html#W05
label：V3.2原版充值规则与历史回归核对
path：上版继承规则与本轮漏测核对-20261114.md

## PM-007 完成入款并回查
模块：待认领入款
预期：余额+200、正流水+200、原充值成功未使用；申请人为甲且窗口正确；支付日昨日、完成时间当前；负责人属于本笔，不回写共享档案；余额、记录及流水均不变
当前：通过

### PM-007-01 甲今日登记200元并指定负责人A
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:42:37.728Z
preconditions：顺序正常登录第二测试角色，分别核对当前账号、窗口及不同支付绑定；结束恢复YST。
steps：甲今日登记200元并指定负责人A
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：余额+200、正流水+200、原充值成功未使用；申请人为甲且窗口正确
actual：甲YST今日现金入款200，RG3619660860877455362，完成13:33:13；余额0.07→200.07，后台正流水+200，申请人YST/YST团队窗口，原来源成功未使用。
result：通过
businessIds：RG3619660860877455362
verification：W03
B04
W12
B05
B11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：待认领唯一预付款账户可用；记录源账户原余额及本笔负责人。
dataIds：D-01
D-02
D-05
sampleKey：QA-PM-20261111-PM-007-01
dependencies：PM-001
steps：甲今日登记200元并指定负责人A
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：余额+200、正流水+200、原充值成功未使用；申请人为甲且窗口正确
verification：W03
B04
W12
B05
B11
protocolId：P-IN
checkpoints：W03反馈→W12/W13→B05/B08→B04余额→B11正流水→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B11
path：../development-spec.html#B11

### PM-007-02 乙补录昨日250元指定负责人B
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:42:37.732Z
preconditions：顺序正常登录第二测试角色，分别核对当前账号、窗口及不同支付绑定；结束恢复YST。
steps：乙补录昨日250元指定负责人B
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：支付日昨日、完成时间当前；负责人属于本笔，不回写共享档案
actual：乙hjk001补录昨日银行卡250，RG3619662613224112130，支付日11-13，完成11-14 13:34:55，负责人张悦轩、POS-SK-01；余额450.07→700.07，后台+250。共享待认领档案负责人/联系人未写回。乙昨日报表仅本笔+250，制单人hjk001。
result：通过
businessIds：RG3619662613224112130
verification：W03
B04
W12
B05
B11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：待认领唯一预付款账户可用；记录源账户原余额及本笔负责人。
dataIds：D-01
D-02
D-05
sampleKey：QA-PM-20261111-PM-007-02
dependencies：PM-001
steps：乙补录昨日250元指定负责人B
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：支付日昨日、完成时间当前；负责人属于本笔，不回写共享档案
verification：W03
B04
W12
B05
B11
protocolId：P-IN
checkpoints：W03反馈→W12/W13→B05/B08→B04余额→B11正流水→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B11
path：../development-spec.html#B11

### PM-007-03 取消合法入款表单
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:23:14.297480
preconditions：待认领余额0.03；窗口当日本人充值18条；后台源账户全流水94条，最新V转出04:17:13
steps：待认领入款填0.03、现金实收0.03、付款人QA-PM1114取消不入账、备注QA-PM1114-CANCEL-NOWRITE-0424；确认充值已启用且找零0.00
点击取消，查询窗口记录、后台源充值与资金流水，再重开入款并查询后台预付款余额
expected：余额、记录及流水均不变
actual：合法表单取消后，窗口记录仍18条、后台源充值与资金流水仍94条，最新均V转出04:17:13；重开表单为空，余额仍0.03，后台B04预付款查询亦0.03，未出现本次草稿入款。
result：通过
businessIds：A3597284940257984512
RG3619087757621346306
verification：W03
B04
W12
B05
B11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：待认领唯一预付款账户可用；记录源账户原余额及本笔负责人。
dataIds：D-01
D-02
D-05
sampleKey：QA-PM-20261111-PM-007-03
dependencies：PM-001
steps：取消合法入款表单
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-IN的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：余额、记录及流水均不变
verification：W03
B04
W12
B05
B11
protocolId：P-IN
checkpoints：W03反馈→W12/W13→B05/B08→B04余额→B11正流水→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B11
path：../development-spec.html#B11

## PM-008 来源资格与筛选
模块：来源选择与长期充值
预期：仅成功未使用原入款；不限当天或当前售票员，每次单选一笔；精确金额及各条件生效；优先顺序符合方案，单号靠后；打开对应充值详情，返回保持本次选择上下文
当前：有问题

### PM-008-01 打开来源选择并查未用和已用样本
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:49:39+08:00
preconditions：HTTP QA，YST售票窗口，本轮入款与长期目标已核验，正常UI操作
steps：打开来源选择并查未用和已用样本
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅成功未使用原入款；不限当天或当前售票员，每次单选一笔
actual：本轮200来源使用前与11月5日/11月4日其他售票员来源共同可选；使用后本轮原单已使用且退出候选，只余两笔旧未用样本。正常单选，未操作旧样本。
result：通过
businessIds：RG3618929685644984322
RG3618933396496728066
RG3618933396496728068
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-008-01
dependencies：PM-001
PM-007
steps：打开来源选择并查未用和已用样本
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅成功未使用原入款；不限当天或当前售票员，每次单选一笔
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04

### PM-008-02 来源列表按充值金额查询并重置
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:49:39+08:00
preconditions：HTTP QA，YST售票窗口，本轮入款与长期目标已核验，正常UI操作
steps：来源列表按充值金额查询并重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅精确金额相等结果
actual：金额精确200仅返回本轮原单；重置清空金额并恢复3笔未用来源。
result：通过
businessIds：RG3618929685644984322
RG3618933396496728066
RG3618933396496728068
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-008-02
dependencies：PM-001
PM-007
steps：来源列表按充值金额查询并重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅精确金额相等结果
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04

### PM-008-02-S02 来源列表按支付日期范围查询并重置
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：来源列表按支付日期范围查询并重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅范围内来源，含跨日来源
actual：来源支付日期仅13日，只返回本轮RG3618985296881532930；14日及11月4/5日记录排除。重置日期为空且恢复4笔候选。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-008-02-S02
dependencies：PM-001
PM-007
steps：来源列表按支付日期范围查询并重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：仅范围内来源，含跨日来源
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04

### PM-008-02-S03 来源列表按负责人查询并重置
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:05:28.018666+08:00
preconditions：G余额0.02，W02空售票购物车；来源A为本轮SHORT0.01，B为既有未用银行卡来源0.01；仅选择和取消，不提交充值
steps：来源列表按负责人查询并重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只返回本笔负责人匹配记录
actual：负责人填管理员并查询，仅返回B（管理员），两个空负责人来源不出现；重置清空且恢复三笔未使用来源。
result：通过
businessIds：RG3618960111193309186
RG3605053247607029762
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-008-02-S03
dependencies：PM-001
PM-007
steps：来源列表按负责人查询并重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只返回本笔负责人匹配记录
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04

### PM-008-02-S04 来源列表按原充值售票员查询并重置
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:49:39+08:00
preconditions：HTTP QA，YST售票窗口，本轮入款与长期目标已核验，正常UI操作
steps：来源列表按原充值售票员查询并重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可查其他售票员，不默认仅本人
actual：原充值售票员填YST售票窗口仅返回本轮原单；清空重置恢复包括王月欣的跨日来源。
result：通过
businessIds：RG3618929685644984322
RG3618933396496728066
RG3618933396496728068
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-008-02-S04
dependencies：PM-001
PM-007
steps：来源列表按原充值售票员查询并重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可查其他售票员，不默认仅本人
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04

### PM-008-02-S05 来源列表按支付方式查询并重置
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：来源列表按支付方式查询并重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只返回原方式匹配记录
actual：来源方式筛银行卡，仅返回银行卡原记录：本轮0.02编号000QA1103POS01及既有0.01 POS-SK-01；现金来源排除。重置后恢复4笔候选。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-008-02-S05
dependencies：PM-001
PM-007
steps：来源列表按支付方式查询并重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只返回原方式匹配记录
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04

### PM-008-02-S06 来源列表按柜台号／POS编号查询并重置
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：来源列表按柜台号／POS编号查询并重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按原入款编号筛选，不用现配置回填
actual：来源POS编号000QA1103POS01筛选，只返回本轮RG3618985296881532930；编号匹配原入款。重置恢复候选。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-008-02-S06
dependencies：PM-001
PM-007
steps：来源列表按柜台号／POS编号查询并重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按原入款编号筛选，不用现配置回填
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04

### PM-008-02-S07 来源列表按充值单号查询并重置
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:49:39+08:00
preconditions：HTTP QA，YST售票窗口，本轮入款与长期目标已核验，正常UI操作
steps：来源列表按充值单号查询并重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可精确定位本轮单号，条件位置在优先字段后
actual：展开后单号条件位于优先六字段之后；填本轮原单精确返回200来源，重置清除并恢复候选。
result：通过
businessIds：RG3618929685644984322
RG3618933396496728066
RG3618933396496728068
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-008-02-S07
dependencies：PM-001
PM-007
steps：来源列表按充值单号查询并重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可精确定位本轮单号，条件位置在优先字段后
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04

### PM-008-02-S08 来源列表按金额＋日期＋负责人查询并重置
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:05:28.018666+08:00
preconditions：G余额0.02，W02空售票购物车；来源A为本轮SHORT0.01，B为既有未用银行卡来源0.01；仅选择和取消，不提交充值
steps：来源列表按金额＋日期＋负责人查询并重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：条件取交集；重置清空条件并重新查询
actual：金额0.01+11月4日单日+负责人管理员，命中B；改金额0.02后点击查询返回暂无数据；改回0.01命中B；重置清空金额日期负责人并重新返回三笔。日期回车误触底层另记PM-BUG-006，不把筛选逻辑误判为错。
result：通过
businessIds：RG3618960111193309186
RG3605053247607029762
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-008-02-S08
dependencies：PM-001
PM-007
steps：来源列表按金额＋日期＋负责人查询并重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：条件取交集；重置清空条件并重新查询
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04

### PM-008-03 点击来源单号
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：点击来源单号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：打开对应充值详情，返回保持本次选择上下文
actual：先选本轮0.02来源，再点击其单号查看充值详情，返回后仍1笔/0.02且该来源被选中。详情方式、资源、付款人、13日支付及14日完成一致。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-008-03
dependencies：PM-001
PM-007
steps：点击来源单号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：打开对应充值详情，返回保持本次选择上下文
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04

### PM-008-02-S09 售票充值来源选择结束日期按回车不误触底层下单
范围：本期必测
结果：有问题
原因：R11实测：新登录YST团队售票窗口，空购物车、AA预付0.09。钱包充值→待认领账户→来源选择，开始及结束日期输入2026-11-14并各按Enter；稍后顶层出现“商品列表不能为空”提示，来源仍在，未点击确认下单/确认充值。 对照：关闭无关提示后，保持同一日期只点击来源“查询”，列表正确刷新为2026-11-14记录，未再弹出商品校验。
runId：R01
executedAt：2026-11-14T03:05:28.018666+08:00
preconditions：G余额0.02，W02空售票购物车；来源A为本轮SHORT0.01，B为既有未用银行卡来源0.01；仅选择和取消，不提交充值
steps：售票购物车空，从G钱包充值切待认领打开来源选择
开始日期填2026-11-04按回车，结束日期填同日按回车
检查提示归属及当前流程；正常点击查询作为对照，不填写有效购物车强制下单
expected：完成来源查询日期输入时保持在当前来源选择流程，不触发底层售票下单校验。
actual：两次复现：在来源选择结束日期按回车，来源弹窗及充值弹窗仍在，最上层出现底层售票“商品列表不能为空”提示；需额外关闭才能继续查询。单独点击查询正常。未用有效购物车继续试提交，不声称已发生误出票。
result：有问题
businessIds：RG3618960111193309186
RG3605053247607029762
verification：W04
evidence：evidence/PM-BUG-006-来源日期回车误触底层售票.png
issueIds：PM-BUG-006
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：完成来源查询日期输入时保持在当前来源选择流程，不触发底层售票下单校验。
actual：空购物车→AA钱包充值→待认领来源；起止日期2026-11-14分别按Enter后，延迟出现底层“商品列表不能为空”提示，来源与充值仍在。即时读数无提示不代表通过，本轮最终已确认复现。未产生订单或充值。
result：有问题
businessIds：
verification：W04
evidence：evidence/PM-BUG-006-R10-来源日期回车仍触发底层校验.jpg
issueIds：PM-BUG-006
record：R10-20261127-开发修复回归.md
runId：R11
executedAt：2026-11-27
preconditions：YST团队售票窗口，购物车空（0张/0元）；启用长期伙伴QA-PM1114同名校验目标AA，预付款余额0.09；钱包充值→待认领账户→来源选择弹窗打开
steps：开始日期输入2026-11-14并按Enter；结束日期输入同日并按Enter
等待异步界面反馈；最上层出现“商品列表不能为空”，未点击下单或确认充值
关闭无关提示，保持同一日期，仅点击来源查询；列表正常刷新为2026-11-14记录
expected：完成来源查询日期输入时保持在当前来源选择流程，不触发底层售票下单校验。
actual：新登录YST团队售票窗口，空购物车、AA预付0.09。钱包充值→待认领账户→来源选择，开始及结束日期输入2026-11-14并各按Enter；稍后顶层出现“商品列表不能为空”提示，来源仍在，未点击确认下单/确认充值。 对照：关闭无关提示后，保持同一日期只点击来源“查询”，列表正确刷新为2026-11-14记录，未再弹出商品校验。
result：有问题
businessIds：
verification：W04
evidence：evidence/PM-BUG-006-R11-对照证据-回车与鼠标查询.png
evidence/PM-BUG-006-R11-01-来源日期回车触发售票校验.png
evidence/PM-BUG-006-R11-02-同日期鼠标查询正常.png
issueIds：PM-BUG-006
record：R11-20261127-争议问题复核.md
执行设计（非执行结果）：
preconditions：YST团队售票窗口，购物车空（0张/0元）；启用长期伙伴QA-PM1114同名校验目标AA，预付款余额0.09；钱包充值→待认领账户→来源选择弹窗打开
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-008-02-S09
dependencies：PM-001
PM-007
steps：开始日期输入2026-11-14并按Enter；结束日期输入同日并按Enter
等待异步界面反馈；最上层出现“商品列表不能为空”，未点击下单或确认充值
关闭无关提示，保持同一日期，仅点击来源查询；列表正常刷新为2026-11-14记录
expected：完成来源查询日期输入时保持在当前来源选择流程，不触发底层售票下单校验。
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04

## PM-009 重选、取消及普通支付切换
模块：来源选择与长期充值
预期：保留A；完成重选则显示B摘要；旧来源清除，不残留金额或重复占用；不再次扫码，不加入普通支付枚举，沿用原方式资源编号
当前：通过

### PM-009-01 W02选来源A后重选B并取消
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:05:28.018666+08:00
preconditions：G余额0.02，W02空售票购物车；来源A为本轮SHORT0.01，B为既有未用银行卡来源0.01；仅选择和取消，不提交充值
steps：W02选来源A后重选B并取消
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：保留A，来源均不扣款
actual：先选A现金0.01，再打开重选改选B银行卡0.01后取消，原摘要仍A及现金/无编号；两来源未扣款。
result：通过
businessIds：RG3618960111193309186
RG3605053247607029762
verification：W02
W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-009-01
dependencies：PM-001
PM-007
steps：W02选来源A后重选B并取消
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：保留A，来源均不扣款
verification：W02
W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06

### PM-009-01-S02 W02选来源A后重选B并确认
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:05:28.018666+08:00
preconditions：G余额0.02，W02空售票购物车；来源A为本轮SHORT0.01，B为既有未用银行卡来源0.01；仅选择和取消，不提交充值
steps：W02选来源A后重选B并确认
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：改为B，摘要单号金额方式编号随之更新
actual：再次重选B并确定，摘要改为B单号、0.01、银行卡、POS-SK-01；取消整个充值后G余额仍0.02，来源选择不生成财务记录。
result：通过
businessIds：RG3618960111193309186
RG3605053247607029762
verification：W02
W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-009-01-S02
dependencies：PM-001
PM-007
steps：W02选来源A后重选B并确认
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：改为B，摘要单号金额方式编号随之更新
verification：W02
W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06

### PM-009-01-S03 W06选来源A后重选B并取消
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:03:53.961338+08:00
preconditions：本轮U扫码0.01、V银行卡0.02均成功未使用；T应回0.01
steps：W06选来源A后重选B并取消
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：保留A，来源均不扣款
actual：T应回0.01，原选U扫码来源RG3619071866242351106金额0.01，重选V银行卡0.02后取消；W06仍显示原0.01/扫码付/CCB-SK-012121212121212，未被V覆盖。最后整体取消；账户记录U/V均成功未使用。
result：通过
businessIds：RG3619071866242351106
RG3619072244199473154
DD261114035057001001s
verification：W06
W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-009-01-S03
dependencies：PM-001
PM-007
steps：W06选来源A后重选B并取消
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：保留A，来源均不扣款
verification：W06
W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06

### PM-009-01-S04 W06选来源A后重选B并确认
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:03:53.961338+08:00
preconditions：本轮U扫码0.01、V银行卡0.02均成功未使用；T应回0.01
steps：W06选来源A后重选B并确认
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：改为B，金额、原方式及编号摘要同步更新；选择器只保留当前一笔，不扣原来源；W06不额外强制W02独有的单号摘要字段
actual：T原选U后重新选择V并确认，W06金额改0.02、原方式银行卡、编号POS-SK-02同步；出现0.01差额处理且无默认、确认禁用。随后切普通支付及取消，U/V仍未使用。W06摘要不额外强制单号字段，W02仍按明确单号要求。
result：通过
businessIds：RG3619071866242351106
RG3619072244199473154
DD261114035057001001s
verification：W06
W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-009-01-S04
dependencies：PM-001
PM-007
steps：W06选来源A后重选B并确认
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：改为B，金额、原方式及编号摘要同步更新；选择器只保留当前一笔，不扣原来源；W06不额外强制W02独有的单号摘要字段
verification：W06
W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06

### PM-009-02 W02待认领来源切普通方式再切回
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:05:28.018666+08:00
preconditions：G余额0.02，W02空售票购物车；来源A为本轮SHORT0.01，B为既有未用银行卡来源0.01；仅选择和取消，不提交充值
steps：W02待认领来源切普通方式再切回
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原来源选择清除，须重新选来源，未发生扣款；金额草稿是否保留不额外规定。
actual：从B切现金后来源摘要清除；切回待认领立即打开选择器，已选0笔/0.00、确定选择禁用。取消选择后充值确认禁用，不会自动沿用B。金额0.01草稿保留，正式需求未要求清空。
result：通过
businessIds：RG3618960111193309186
RG3605053247607029762
verification：W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-009-02
dependencies：PM-001
PM-007
steps：W02待认领来源切普通方式再切回
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原来源选择清除，须重新选来源，未发生扣款；金额草稿是否保留不额外规定。
verification：W02
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06

### PM-009-02-S02 W06待认领来源切普通方式再切回
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:03:53.961338+08:00
preconditions：本轮U扫码0.01、V银行卡0.02均成功未使用；T应回0.01
steps：W06待认领来源切普通方式再切回
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原来源选择清除，须重新选来源，未发生扣款；金额草稿是否保留不额外规定。
actual：W06选V后切现金再切待认领，重新打开W04显示已选0笔/0.00，未沿用V。取消选择回原现金表单；整体取消后U与V仍成功未使用、T未回款，无认领转出。
result：通过
businessIds：RG3619071866242351106
RG3619072244199473154
DD261114035057001001s
verification：W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-009-02-S02
dependencies：PM-001
PM-007
steps：W06待认领来源切普通方式再切回
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原来源选择清除，须重新选来源，未发生扣款；金额草稿是否保留不额外规定。
verification：W06
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06

### PM-009-03 选待认领来源
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：选待认领来源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不再次扫码，不加入普通支付枚举，沿用原方式资源编号
actual：先找款带入原银行卡及000QA1103POS01，W06无再次扫码或新资源选择，S0.02只读，最终同一原快照保存；内部来源未加入五种普通枚举。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W02
W04
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-009-03
dependencies：PM-001
PM-007
steps：选待认领来源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不再次扫码，不加入普通支付枚举，沿用原方式资源编号
verification：W02
W04
W06
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06

## PM-010 来源用于长期充值及分配
模块：来源选择与长期充值
预期：C=200、I=0；来源全用，目标+200、源-200；客户仅+200，公司收入50；一笔负转出-250且来源已用；无零元客户充值；公司收入100，来源全用；禁止确认，不改变来源余额和使用状态；按原目标账户及负责人规则；无临客订单平账区
当前：通过

### PM-010-01 来源200默认分配
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:49:39+08:00
preconditions：HTTP QA，YST售票窗口，本轮入款与长期目标已核验，正常UI操作
steps：来源200默认分配
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：C=200、I=0；来源全用，目标+200、源-200
actual：来源200默认C=200/I=0，无再次扫码；确认后目标余额-0.01→199.99，源200.03→0.03。窗口记录目标+200、认领转出-200，原来源已使用；后台刷新两账户余额及对应两条资金流水一致。目标负责人管理员，来源负责人空。
result：通过
businessIds：RG3618929685644984322
RG3618933396496728066
RG3618933396496728068
verification：W02
B04
B05
B09
B11
W16
B12
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-010-01
dependencies：PM-001
PM-007
steps：来源200默认分配
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：C=200、I=0；来源全用，目标+200、源-200
verification：W02
B04
B05
B09
B11
W16
B12
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

### PM-010-02 另一来源250分配C=200、I=50
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：另一来源250分配C=200、I=50
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：客户仅+200，公司收入50；一笔负转出-250且来源已用
actual：独立250来源C200/I50成功，负转出RG3618938945594474498=-250，目标充值RG3618938945594474500=200，收入RG3618938945594474502=50。源原单已使用；后台目标余额199.99→399.99，源回0.03；前后台收入及关联源/目标/转出一致。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：W02
B04
B05
B09
B11
W16
B12
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-010-02
dependencies：PM-001
PM-007
steps：另一来源250分配C=200、I=50
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：客户仅+200，公司收入50；一笔负转出-250且来源已用
verification：W02
B04
B05
B09
B11
W16
B12
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

### PM-010-03 另一来源100分配C=0、I=100
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：另一来源100分配C=0、I=100
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：无零元客户充值；公司收入100，来源全用
actual：独立100来源C0/I100成功；仅负转出RG3618938138140622850=-100及收入RG3618938138140622852=100，前后台账户充值未生成零元目标充值；目标余额不因此增加，最终只增加两次200为399.99；源恢复0.03。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：W02
B04
B05
B09
B11
W16
B12
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-010-03
dependencies：PM-001
PM-007
steps：另一来源100分配C=0、I=100
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：无零元客户充值；公司收入100，来源全用
verification：W02
B04
B05
B09
B11
W16
B12
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

### PM-010-04 来源S=100，设置C=-1,I=101
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：来源S=100，设置C=-1,I=101
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：负客户充值不允许
actual：100来源尝试C=-1/I=101，失焦后负C归0、I未接受101而保持0；合计0，确认禁用；未提交。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-010-04
dependencies：PM-001
PM-007
steps：来源S=100，设置C=-1,I=101
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：负客户充值不允许
verification：W02
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

### PM-010-04-S02 来源S=100，设置C=101,I=-1
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：来源S=100，设置C=101,I=-1
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：负其他收入不允许
actual：100来源尝试C=101/I=-1，I负值失焦归0，合计101，确认禁用，未提交。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-010-04-S02
dependencies：PM-001
PM-007
steps：来源S=100，设置C=101,I=-1
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：负其他收入不允许
verification：W02
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

### PM-010-04-S03 来源S=100，设置C=90,I=0
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：来源S=100，设置C=90,I=0
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：合计不足来源禁止确认，不部分使用
actual：100来源C90/I0，合计90，确认禁用，不能部分使用。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-010-04-S03
dependencies：PM-001
PM-007
steps：来源S=100，设置C=90,I=0
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：合计不足来源禁止确认，不部分使用
verification：W02
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

### PM-010-04-S04 来源S=100，设置C=100,I=1
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：来源S=100，设置C=100,I=1
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：合计超过来源禁止确认，不补差或合并
actual：100来源C100/I1，合计101，确认禁用，不能超额或补差。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-010-04-S04
dependencies：PM-001
PM-007
steps：来源S=100，设置C=100,I=1
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：合计超过来源禁止确认，不补差或合并
verification：W02
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

### PM-010-05 向默认挂帐长期目标以独立来源充值
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:11:47.094573+08:00
preconditions：本轮SHORT未用来源0.01，已有启用挂帐伙伴作目标；不以旧历史记录作缺陷依据
steps：向默认挂帐长期目标以独立来源充值
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按目标当前默认账户承接；目标负责人沿原规则，无临客订单平账区
actual：使用本轮SHORT来源RG3618960111193309186 0.01认领到默认挂帐个人1104，目标充值RG3619019003784871940+0.01、源转出RG3619019003784871938-0.01，来源已使用。窗口及后台充值详情一致，目标test666负责人保留、无临客订单平账区；目标余额-150.00→-149.99（重新从列表开窗）。未更改该伙伴档案配置。
result：通过
businessIds：RG3618960111193309186
RG3619019003784871938
RG3619019003784871940
A3605087521446051840
verification：W02
B04
B05
B11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-010-05
dependencies：PM-001
PM-007
steps：向默认挂帐长期目标以独立来源充值
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按目标当前默认账户承接；目标负责人沿原规则，无临客订单平账区
verification：W02
B04
B05
B11
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

### PM-010-05-S02 向默认预付款长期目标以独立来源充值
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:49:39+08:00
preconditions：HTTP QA，YST售票窗口，本轮入款与长期目标已核验，正常UI操作
steps：向默认预付款长期目标以独立来源充值
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按目标当前默认账户承接；目标负责人沿原规则，无临客订单平账区
actual：目标QA2-W10预付伙伴1105默认预付款；本轮独立200来源承接到A3606358539707891713，负责人沿目标管理员；无临客订单平账区，后台预付款余额199.99及正流水+200已核对。
result：通过
businessIds：RG3618929685644984322
RG3618933396496728066
RG3618933396496728068
verification：W02
B04
B05
B11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-010-05-S02
dependencies：PM-001
PM-007
steps：向默认预付款长期目标以独立来源充值
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按目标当前默认账户承接；目标负责人沿原规则，无临客订单平账区
verification：W02
B04
B05
B11
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

## PM-011 列表入口、查询和按钮
模块：临客列表与回款
预期：标签顺序符合方案，回款状态下拉切待回款已回款，无新增子标签；日期不限自动查；原售票员不默认当前人；查询条件全展示无无效展开；结果符合订单快照，其他条件按方案存在并生效；查询回第一页；重置清条件；变更条件或视图清选择；全选仅当前页；有选择回款迁移启用找款禁用，无选择相反
当前：通过

### PM-011-01 进入合作伙伴标签
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:04:05+08:00
preconditions：本轮临客订单A/B，非实名测试票97274各0.01；正常UI下单出票并选择不打印，无真实游客信息
steps：进入合作伙伴标签
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：标签顺序符合方案，回款状态下拉切待回款已回款，无新增子标签
actual：伙伴主标签顺序为合作伙伴充值/账户充值记录/其他收入记录/公共临时客户回款/充值报表；临客用回款状态下拉切待回款和已回款，无新增子标签。
result：通过
businessIds：DD261114015654001001s
DD261114020123001001s
RG3618945164707119106
RG3618945164707119108
RG3618948239903703042
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-011-01
dependencies：PM-001
steps：进入合作伙伴标签
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：标签顺序符合方案，回款状态下拉切待回款已回款，无新增子标签
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05

### PM-011-02 初次打开及切换状态
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:04:05+08:00
preconditions：本轮临客订单A/B，非实名测试票97274各0.01；正常UI下单出票并选择不打印，无真实游客信息
steps：初次打开及切换状态
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：日期不限自动查；原售票员不默认当前人；查询条件全展示无无效展开
actual：首次进入待回款，下单日期范围空、全部售票员，自动加载含本轮及其他售票员跨日候选；查询条件完整展示，无展开按钮。切已回款自动查，新增回款条件展示。
result：通过
businessIds：DD261114015654001001s
DD261114020123001001s
RG3618945164707119106
RG3618945164707119108
RG3618948239903703042
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-011-02
dependencies：PM-001
steps：初次打开及切换状态
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：日期不限自动查；原售票员不默认当前人；查询条件全展示无无效展开
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05

### PM-011-03 临客列表按客户名称片段查询
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:04:05+08:00
preconditions：本轮临客订单A/B，非实名测试票97274各0.01；正常UI下单出票并选择不打印，无真实游客信息
steps：临客列表按客户名称片段查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按订单客户快照模糊匹配
actual：客户片段QA-PM1114临客可查询本轮A/B订单；精确A仅A，按订单客户快照匹配。
result：通过
businessIds：DD261114015654001001s
DD261114020123001001s
RG3618945164707119106
RG3618945164707119108
RG3618948239903703042
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-011-03
dependencies：PM-001
steps：临客列表按客户名称片段查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按订单客户快照模糊匹配
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05

### PM-011-03-S02 临客列表按负责人姓名片段查询
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:04:05+08:00
preconditions：本轮临客订单A/B，非实名测试票97274各0.01；正常UI下单出票并选择不打印，无真实游客信息
steps：临客列表按负责人姓名片段查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按订单负责人快照匹配
actual：已回款客户片段限定本轮A/B，负责人填管理员，仅返回A原订单，保持订单负责人快照。
result：通过
businessIds：DD261114015654001001s
DD261114020123001001s
RG3618945164707119106
RG3618945164707119108
RG3618948239903703042
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-011-03-S02
dependencies：PM-001
steps：临客列表按负责人姓名片段查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按订单负责人快照匹配
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05

### PM-011-03-S03 临客列表按负责人手机片段查询
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:04:05+08:00
preconditions：本轮临客订单A/B，非实名测试票97274各0.01；正常UI下单出票并选择不打印，无真实游客信息
steps：临客列表按负责人手机片段查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按手机快照匹配
actual：负责人手机17411110000仅返回B原订单，负责人张悦轩；A管理员未返回。
result：通过
businessIds：DD261114015654001001s
DD261114020123001001s
RG3618945164707119106
RG3618945164707119108
RG3618948239903703042
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-011-03-S03
dependencies：PM-001
steps：临客列表按负责人手机片段查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按手机快照匹配
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05

### PM-011-03-S04 临客列表按负责人手填文字查询
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:24:18.516626+08:00
preconditions：本轮后台M回款已完成；已回款列表使用同一单作正反查询对照
steps：临客列表按负责人手填文字查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：兼容手填负责人快照
actual：已回款按M回款单号锁定样本，负责人输入张悦轩查为空、管理员查命中M；文字输入不是负责人枚举，未混用实际回款人西瓜。
result：通过
businessIds：DD261114031418001001s
RG3619029638123896834
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-011-03-S04
dependencies：PM-001
steps：临客列表按负责人手填文字查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：兼容手填负责人快照
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05

### PM-011-03-S05 临客列表按订单号查询
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:04:05+08:00
preconditions：本轮临客订单A/B，非实名测试票97274各0.01；正常UI下单出票并选择不打印，无真实游客信息
steps：临客列表按订单号查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：定位对应本轮订单
actual：订单号DD261114020123001001s定位本轮B，结清0.01、原总额0.01、退款0、正确回款单号。
result：通过
businessIds：DD261114015654001001s
DD261114020123001001s
RG3618945164707119106
RG3618945164707119108
RG3618948239903703042
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-011-03-S05
dependencies：PM-001
steps：临客列表按订单号查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：定位对应本轮订单
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05

### PM-011-03-S06 临客列表按原售票员查询
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:24:18.516626+08:00
preconditions：本轮后台M回款已完成；已回款列表使用同一单作正反查询对照
steps：临客列表按原售票员查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可查其他原售票员订单
actual：同M已回款样本，原订单售票员选西瓜不命中、选YST售票窗口命中；实际回款人仍西瓜，两个主体筛选独立。
result：通过
businessIds：DD261114031418001001s
RG3619029638123896834
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-011-03-S06
dependencies：PM-001
steps：临客列表按原售票员查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可查其他原售票员订单
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05

### PM-011-03-S07 临客列表按已回款的回款单号／操作人／来源／支付日查询
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:24:18.516626+08:00
preconditions：本轮后台M回款已完成；已回款列表使用同一单作正反查询对照
steps：临客列表按已回款的回款单号／操作人／来源／支付日查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：各条件可见并生效，分别留结果；复用同一本轮完成样本
actual：回款单号RG3619029638123896834可单独定位M；操作人YST为空/西瓜命中；来源售票窗口为空/后台命中；支付日期13日为空/14日命中。每次实际点击查询并读取结果，组合条件命中同一M；重置恢复列表。
result：通过
businessIds：DD261114031418001001s
RG3619029638123896834
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-011-03-S07
dependencies：PM-001
steps：临客列表按已回款的回款单号／操作人／来源／支付日查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：各条件可见并生效，分别留结果；复用同一本轮完成样本
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05

### PM-011-04 有选择且位于非首页时执行查询
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:28:22.909228+08:00
preconditions：既有待回款46条，纯列表勾选及查询；未对历史订单提交业务操作
steps：有选择且位于非首页时执行查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：回第一页，结果符合条件
actual：第2页勾选DD260901111957001001s后查询，返回第1页DD260902101616001001s起始；选择0、合计0.00、回款和迁移禁用。
result：通过
businessIds：DD260901111957001001s
DD260902101616001001s
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-011-04
dependencies：PM-001
steps：有选择且位于非首页时执行查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：回第一页，结果符合条件
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05

### PM-011-04-S02 有选择且位于非首页时执行重置
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:28:22.909228+08:00
preconditions：既有待回款46条，纯列表勾选及查询；未对历史订单提交业务操作
steps：有选择且位于非首页时执行重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：清空条件并重新查，清选择
actual：第2页勾选后重置，清空条件、回到第1页、选择0及合计0.00，回款和迁移禁用。
result：通过
businessIds：DD260901111957001001s
DD260902101616001001s
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-011-04-S02
dependencies：PM-001
steps：有选择且位于非首页时执行重置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：清空条件并重新查，清选择
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05

### PM-011-04-S03 有选择且位于非首页时执行修改查询条件
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:28:22.909228+08:00
preconditions：既有待回款46条，纯列表勾选及查询；未对历史订单提交业务操作
steps：有选择且位于非首页时执行修改查询条件
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原选择清除，不带旧条件订单提交
actual：第2页勾选后仅编辑客户名称为QA-PM1114，未点查询时已清除选择、合计0.00；没有携带旧勾选。
result：通过
businessIds：DD260901111957001001s
DD260902101616001001s
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-011-04-S03
dependencies：PM-001
steps：有选择且位于非首页时执行修改查询条件
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原选择清除，不带旧条件订单提交
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05

### PM-011-04-S04 有选择且位于非首页时执行切换待回款／已回款
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:28:22.909228+08:00
preconditions：既有待回款46条，纯列表勾选及查询；未对历史订单提交业务操作
steps：有选择且位于非首页时执行切换待回款／已回款
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原选择清除，视图字段及可用按钮正确
actual：第2页有选择时切已回款，移除勾选栏及回款/迁移按钮，展示已回款专属字段；切回待回款回第1页且0笔0.00。
result：通过
businessIds：DD260901111957001001s
DD260902101616001001s
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-011-04-S04
dependencies：PM-001
steps：有选择且位于非首页时执行切换待回款／已回款
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原选择清除，视图字段及可用按钮正确
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05

### PM-011-05 勾选及取消订单、使用表头全选
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:28:22.909228+08:00
preconditions：既有待回款46条，纯列表勾选及查询；未对历史订单提交业务操作
steps：勾选及取消订单、使用表头全选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：全选仅当前页；有选择回款迁移启用找款禁用，无选择相反
actual：表头全选仅本页10笔30.09；取消30.00订单后剩9笔0.09；清空后0笔0.00。有选择时回款/迁移启用、待认领款回款禁用，清空后相反。
result：通过
businessIds：DD260901111957001001s
DD260902101616001001s
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-011-05
dependencies：PM-001
steps：勾选及取消订单、使用表头全选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：全选仅当前页；有选择回款迁移启用找款禁用，无选择相反
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05

## PM-012 候选金额、字段及排序
模块：临客列表与回款
预期：仅挂帐未回款净额>0候选；D=总额−成功退款；字段完整；按下单时间倒序后分页；本单结清快照、回款单号操作人来源方式编号支付日；不重复主金额且无再次操作；支付时间倒序再下单时间倒序；后台回款可见但不算窗口售票员收款
当前：通过

### PM-012-01 查询本轮未回款无退款订单
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:04:05+08:00
preconditions：本轮临客订单A/B，非实名测试票97274各0.01；正常UI下单出票并选择不打印，无真实游客信息
steps：查询本轮未回款无退款订单
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：候选且D=订单总额
actual：本轮非实名测试商品97274临客挂帐订单A/B各1票0.01，未回款无退款，候选净应回=总额0.01。
result：通过
businessIds：DD261114015654001001s
DD261114020123001001s
RG3618945164707119106
RG3618945164707119108
RG3618948239903703042
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-012-01
dependencies：PM-001
steps：查询本轮未回款无退款订单
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：候选且D=订单总额
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B05
path：../development-spec.html#B05

### PM-012-01-S02 查询本轮部分成功退款订单
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:50:47.992971+08:00
preconditions：本轮K两票0.02，独立QA标签正常退一票0.01；旧回款弹窗保留退款前0.02
steps：查询本轮部分成功退款订单
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：候选且D=总额−成功退款
actual：K总额0.02，成功退款0.01后仍在待回款，净应回0.01；订单总额与已退款金额各独立显示，原订单号不变。
result：通过
businessIds：DD261114024642001001s
LYAS3618996377808863232
RG3618997391509438466
RG3618997391509438468
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-012-01-S02
dependencies：PM-001
steps：查询本轮部分成功退款订单
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：候选且D=总额−成功退款
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B05
path：../development-spec.html#B05

### PM-012-01-S03 查询本轮全额成功退款订单
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:53:30.922104+08:00
preconditions：本轮自建L公共临客订单0.01，旧表单先打开，另一测试标签正常全退
steps：查询本轮全额成功退款订单
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不在待回款候选
actual：本轮L单唯一票56GC6ZJ5DL222全退成功0.01，净额0，原客户筛选下待回款无候选。资金流水原消费-0.01/退款+0.01，无额外回款充值，原消费零净额显示已回款。
result：通过
businessIds：DD261114025142001001s
LYAS3619000260459298816
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-012-01-S03
dependencies：PM-001
steps：查询本轮全额成功退款订单
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不在待回款候选
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B05
path：../development-spec.html#B05

### PM-012-01-S04 查询本轮已迁移订单
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:06:09.613199+08:00
preconditions：本轮T未回款、R已迁移，U/V未使用；仅只读查询和选择取消
steps：查询本轮已迁移订单
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不在待回款候选
actual：待回款按本轮已迁移R订单DD261114034441001001s精确查询暂无数据，回款和迁移均禁用；原R详情之前已核实归属个人预付RS。
result：通过
businessIds：DD261114035057001001s
DD261114034441001001s
RG3619071866242351106
RG3619072244199473154
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-012-01-S04
dependencies：PM-001
steps：查询本轮已迁移订单
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不在待回款候选
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B05
path：../development-spec.html#B05

### PM-012-01-S05 查询本轮已结清订单
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:50:47.992971+08:00
preconditions：本轮K两票0.02，独立QA标签正常退一票0.01；旧回款弹窗保留退款前0.02
steps：查询本轮已结清订单
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不在待回款候选，已回款可查
actual：I/J及K结清后均退出各自客户待回款候选；已回款视图可查询，单笔净结清额I/J各0.01，K0.01，原退款明细保留。
result：通过
businessIds：DD261114024642001001s
LYAS3618996377808863232
RG3618997391509438466
RG3618997391509438468
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-012-01-S05
dependencies：PM-001
steps：查询本轮已结清订单
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不在待回款候选，已回款可查
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B05
path：../development-spec.html#B05

### PM-012-02 查看待回款列表及跨页顺序
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:06:09.613199+08:00
preconditions：本轮T未回款、R已迁移，U/V未使用；仅只读查询和选择取消
steps：查看待回款列表及跨页顺序
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：字段完整；按下单时间倒序后分页
actual：待回款重置共46条，表头完整，页1 T 11-14 03:50:57到09-01 11:22:58，页2首09-01 11:21:30到08-31 14:09:23；两页内及分页边界下单时间均递减，仅只读查选。
result：通过
businessIds：DD261114035057001001s
DD261114034441001001s
RG3619071866242351106
RG3619072244199473154
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-012-02
dependencies：PM-001
steps：查看待回款列表及跨页顺序
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：字段完整；按下单时间倒序后分页
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B05
path：../development-spec.html#B05

### PM-012-03 查看本轮已回款列表
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:04:05+08:00
preconditions：本轮临客订单A/B，非实名测试票97274各0.01；正常UI下单出票并选择不打印，无真实游客信息
steps：查看本轮已回款列表
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：本单结清快照、回款单号操作人来源方式编号支付日；不重复主金额且无再次操作
actual：A/B已回款行各本单0.01，保留订单总额0.01/退款0/原售票员YST；分别关联回款RG3618945164707119106和RG3618948239903703042、操作人YST、来源售票窗口、现金、编号—、支付日14日。已回款视图无回款/迁移按钮。
result：通过
businessIds：DD261114015654001001s
DD261114020123001001s
RG3618945164707119106
RG3618945164707119108
RG3618948239903703042
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-012-03
dependencies：PM-001
steps：查看本轮已回款列表
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：本单结清快照、回款单号操作人来源方式编号支付日；不重复主金额且无再次操作
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B05
path：../development-spec.html#B05

### PM-012-04 多条同支付日已回款记录跨页检查排序
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:06:09.613199+08:00
preconditions：本轮T未回款、R已迁移，U/V未使用；仅只读查询和选择取消
steps：多条同支付日已回款记录跨页检查排序
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按支付时间倒序，同支付时间再下单时间倒序，先排序再分页
actual：已回款页1支付11-14的本轮P/O/M/J/I/F/E/C/B/A，按下单时间03:33:30递减至01:56:54；页2首本轮K支付11-13而下单02:46:42，正确排在11-14之后；随后支付11-05/11-04，支付日相同时按下单倒序，未将完成日期当支付日期。
result：通过
businessIds：DD261114035057001001s
DD261114034441001001s
RG3619071866242351106
RG3619072244199473154
verification：W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-012-04
dependencies：PM-001
steps：多条同支付日已回款记录跨页检查排序
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按支付时间倒序，同支付时间再下单时间倒序，先排序再分页
verification：W05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B05
path：../development-spec.html#B05

### PM-012-04-S02 后台回款本轮订单在窗口查询
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:22:19.719134+08:00
preconditions：本轮M单DD261114031418001001s未回款0.01；窗口旧表单先打开，后台西瓜正常回款，不并发
steps：后台回款本轮订单在窗口查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可见并准确区分来源；不冒计窗口操作人及窗口实收
actual：本轮后台M回款RG3619029638123896834在窗口已回款列表可见：0.01、操作西瓜、来源后台、原售票员YST。原订单详情已回款且售票来源YST团队窗口、原支付挂帐、客户M不变。14日窗口充值报表300.12=此前300.11+新增来源0.01，公共临客窗口充值仍0.08/收入0.02，未把后台M0.01计入窗口实收。
result：通过
businessIds：DD261114031418001001s
RG3619029638123896834
verification：W05
W16
B05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-012-04-S02
dependencies：PM-001
steps：后台回款本轮订单在窗口查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可见并准确区分来源；不冒计窗口操作人及窗口实收
verification：W05
W16
B05
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B05
path：../development-spec.html#B05

## PM-013 普通支付结清
模块：临客列表与回款
预期：充值100、所选订单全部结清，原消费只改回款状态不再消费；不默认处理差额；选择后充值100、公司收入20；提示差额0.01并禁止提交；不允许部分结清；净应回100，明细仍保留总额与退款；不记账不结清，选择可重新操作
当前：通过

### PM-013-01 普通方式收款S=D（本轮D=S=0.01）
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:04:05+08:00
preconditions：本轮临客订单A/B，非实名测试票97274各0.01；正常UI下单出票并选择不打印，无真实游客信息
steps：普通方式收款D=100、S=100
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：充值D（本轮0.01）、所选订单全部结清，原消费只改回款状态不再消费
actual：B订单D=S=0.01，现金实收0.01，生成充值RG3618948239903703042=0.01；订单已回款，后台原消费仅一条-0.01、状态已回款，正充值一条+0.01，无重复消费。
result：通过
businessIds：DD261114015654001001s
DD261114020123001001s
RG3618945164707119106
RG3618945164707119108
RG3618948239903703042
verification：W06
W07
R01
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-013-01
dependencies：PM-001
steps：普通方式收款D=100、S=100
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：充值D（本轮0.01）、所选订单全部结清，原消费只改回款状态不再消费
verification：W06
W07
R01
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 R01
path：../development-spec.html#R01

### PM-013-02 普通方式S>D，先不选其他收入再主动选择（本轮D=0.01，S=0.02）
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:04:05+08:00
preconditions：本轮临客订单A/B，非实名测试票97274各0.01；正常UI下单出票并选择不打印，无真实游客信息
steps：普通方式D=100、S=120先不选其他收入再主动选择
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不默认处理差额；主动选择后充值D=0.01、公司收入S-D=0.01
actual：A订单D=0.01，S=0.02；差额处理初始未选，确认禁用；主动选计入其他收入后提交。充值RG3618945164707119106=0.01、公司收入RG3618945164707119108=0.01，原消费一条-0.01已回款；已回款列表只显示本单0.01不显示主收款0.02。
result：通过
businessIds：DD261114015654001001s
DD261114020123001001s
RG3618945164707119106
RG3618945164707119108
RG3618948239903703042
verification：W06
W07
R01
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-013-02
dependencies：PM-001
steps：普通方式D=100、S=120先不选其他收入再主动选择
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不默认处理差额；主动选择后充值D=0.01、公司收入S-D=0.01
verification：W06
W07
R01
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 R01
path：../development-spec.html#R01

### PM-013-03 D=0.02、S=0.01（本轮最小金额，不足0.01）
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：D=100、S=99.99
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示差额0.01并禁止提交；不允许部分结清
actual：I/J净应回0.02，登记S0.01，明确提示“本次收款不足，还差0.01元，不能提交回款”，确认禁用；恢复0.02后提示清除。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W06
W07
R01
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-013-03
dependencies：PM-001
steps：D=100、S=99.99
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示差额0.01并禁止提交；不允许部分结清
verification：W06
W07
R01
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 R01
path：../development-spec.html#R01

### PM-013-04 选择部分退款订单总额0.02、成功退款0.01进行回款
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:50:47.992971+08:00
preconditions：本轮K两票0.02，独立QA标签正常退一票0.01；旧回款弹窗保留退款前0.02
steps：选择部分退款订单总额150、成功退款50进行回款
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：净应回100，明细仍保留总额与退款
actual：K重新查选后D=0.01，W06仍保留总额0.02/退款0.01。登记0.02、主动选公司收入0.01、现金0.03找零0.01成功；客户充值RG3618997391509438466仅+0.01，原消费单笔已回款，原退款+0.01单笔；后台挂帐处理结果消费0.02、退款0.01、平账0.01。
result：通过
businessIds：DD261114024642001001s
LYAS3618996377808863232
RG3618997391509438466
RG3618997391509438468
verification：W06
W07
R01
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-013-04
dependencies：PM-001
steps：选择部分退款订单总额150、成功退款50进行回款
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：净应回100，明细仍保留总额与退款
verification：W06
W07
R01
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 R01
path：../development-spec.html#R01

### PM-013-05 合法输入后取消
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:04:05+08:00
preconditions：本轮临客订单A/B，非实名测试票97274各0.01；正常UI下单出票并选择不打印，无真实游客信息
steps：合法输入后取消
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不记账不结清，选择可重新操作
actual：A订单合法S=D=0.01、现金实收0.01按钮启用后取消；原选择保留、订单仍未回款，可重开；随后唯一一次正式回款仅对应一笔客户充值，不因取消新增账。
result：通过
businessIds：DD261114015654001001s
DD261114020123001001s
RG3618945164707119106
RG3618945164707119108
RG3618948239903703042
verification：W06
W07
R01
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-013-05
dependencies：PM-001
steps：合法输入后取消
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不记账不结清，选择可重新操作
verification：W06
W07
R01
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 R01
path：../development-spec.html#R01

## PM-014 先找款再选订单
模块：来源选择与长期充值
预期：进入原W06，来源金额只读并可确认；立即提示不足20且下一步禁用；不能合并其他来源或补收；转W06主动确认其他收入50后才能提交；一行查询、订单号可查看，金额表头单行，跨页保留与合计正确；不扣款不结清；成功关闭刷新，再次处理须重新进入，无队列自动下一笔
当前：通过

### PM-014-01 无订单选择时进入待认领款回款，选单笔200和多笔净额合计200
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：无订单选择时进入待认领款回款，选单笔200和多笔净额合计200
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：进入原W06，来源金额只读并可确认
actual：已执行单笔C来源0.01=订单0.01及本轮多笔I/J来源0.02=两单合计0.02（金额按真实最小商品代入）。先找款→两单→原W06，S0.02只读，无超额收入选项，可确认并成功。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W04
W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-014-01
dependencies：PM-001
PM-007
steps：无订单选择时进入待认领款回款，选单笔200和多笔净额合计200
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：进入原W06，来源金额只读并可确认
verification：W04
W05
W06
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W06
path：../development-spec.html#W06

### PM-014-02 来源0.01选择净额0.02（按实际最小商品金额）
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:16:12.359409+08:00
preconditions：本轮新建E双票订单0.02、F单票订单0.01，客户名和负责人不同；新来源0.04；另有0.01不足来源。
steps：来源100选择净额合计120
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：立即提示不足20且下一步禁用；不能合并其他来源或补收
actual：示例按实际最小金额：来源0.01、E净额0.02，选中立即提示“本笔款不足，还差0.01元；请重新选择对应订单”，下一步禁用。只支持单笔来源，无补收/合并来源入口。取消后来源RG3618960111193309186仍未使用，无转出。
result：通过
businessIds：DD261114021242001001s
DD261114021305001001s
RG3618960695308861442
RG3618961674561404930
RG3618961674561404932
RG3618961674561404934
verification：W04
W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-014-02
dependencies：PM-001
PM-007
steps：来源100选择净额合计120
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：立即提示不足0.01且下一步禁用；不能合并其他来源或补收
verification：W04
W05
W06
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W06
path：../development-spec.html#W06

### PM-014-03 来源0.04选择多笔净额0.03（按实际最小商品金额）
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:16:12.359409+08:00
preconditions：本轮新建E双票订单0.02、F单票订单0.01，客户名和负责人不同；新来源0.04；另有0.01不足来源。
steps：来源250选择净额200
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：转W06主动确认其他收入50后才能提交
actual：来源0.04，E+F净额0.03，提示超出0.01且下一步须确认其他收入；进入W06金额只读0.04，剩余处理为空时确认禁用，手选计入其他收入后才能继续。提交后客户充值0.03、公司收入0.01。
result：通过
businessIds：DD261114021242001001s
DD261114021305001001s
RG3618960695308861442
RG3618961674561404930
RG3618961674561404932
RG3618961674561404934
verification：W04
W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-014-03
dependencies：PM-001
PM-007
steps：来源250选择净额200
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：转W06主动确认其他收入0.01后才能提交
verification：W04
W05
W06
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W06
path：../development-spec.html#W06

### PM-014-04 先找款选择订单时执行综合搜客户／订单／负责人
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:16:12.359409+08:00
preconditions：本轮新建E双票订单0.02、F单票订单0.01，客户名和负责人不同；新来源0.04；另有0.01不足来源。
steps：先找款选择订单时执行综合搜客户／订单／负责人
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：一行搜索，按各输入分别核查相应结果
actual：同一行综合搜索：C单号仅C、QA-PM1114筛出本轮未回款E/F、管理员查出E及其他管理员订单；字段结果与实际客户、订单及负责人对应。
result：通过
businessIds：DD261114021242001001s
DD261114021305001001s
RG3618960695308861442
RG3618961674561404930
RG3618961674561404932
RG3618961674561404934
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-014-04
dependencies：PM-001
PM-007
steps：先找款选择订单时执行综合搜客户／订单／负责人
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：一行搜索，按各输入分别核查相应结果
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W06
path：../development-spec.html#W06

### PM-014-04-S02 先找款选择订单时执行下单时间查询
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:06:09.613199+08:00
preconditions：本轮T未回款、R已迁移，U/V未使用；仅只读查询和选择取消
steps：先找款选择订单时执行下单时间查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：结果在时间范围内
actual：先找款选U，订单选择下单日期2026-11-14至同日，Tab收起日期后查询，只返回T 03:50:57；历史09月订单退出结果。
result：通过
businessIds：DD261114035057001001s
DD261114034441001001s
RG3619071866242351106
RG3619072244199473154
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-014-04-S02
dependencies：PM-001
PM-007
steps：先找款选择订单时执行下单时间查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：结果在时间范围内
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W06
path：../development-spec.html#W06

### PM-014-04-S03 先找款选择订单时执行应回款精确金额查询
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:16:12.359409+08:00
preconditions：本轮新建E双票订单0.02、F单票订单0.01，客户名和负责人不同；新来源0.04；另有0.01不足来源。
steps：先找款选择订单时执行应回款精确金额查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：净额精确匹配
actual：综合词QA-PM1114加应回款精确金额0.01仅F；清金额后E0.02、F0.01均出现。
result：通过
businessIds：DD261114021242001001s
DD261114021305001001s
RG3618960695308861442
RG3618961674561404930
RG3618961674561404932
RG3618961674561404934
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-014-04-S03
dependencies：PM-001
PM-007
steps：先找款选择订单时执行应回款精确金额查询
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：净额精确匹配
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W06
path：../development-spec.html#W06

### PM-014-04-S04 先找款选择订单时执行跨页勾选
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：先找款选择订单时执行跨页勾选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：选择保留，页脚笔数和净额合计准确
actual：选第一页本轮I0.01，切第二页保持1笔0.01；仅勾选既有DD260831142514001001s的0.01只读样本，页脚2笔0.02；取消该旧样本后返回首页I仍勾选，再勾本轮J为2笔0.02。旧单未提交。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-014-04-S04
dependencies：PM-001
PM-007
steps：先找款选择订单时执行跨页勾选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：选择保留，页脚笔数和净额合计准确
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W06
path：../development-spec.html#W06

### PM-014-04-S05 先找款选择订单时执行清空选择
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:16:12.359409+08:00
preconditions：本轮新建E双票订单0.02、F单票订单0.01，客户名和负责人不同；新来源0.04；另有0.01不足来源。
steps：先找款选择订单时执行清空选择
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已选笔数和金额为0，下一步状态正确
actual：不足来源选择E后清空选择，勾选清除、0笔/0.00、下一步禁用，旧不足提示消失。
result：通过
businessIds：DD261114021242001001s
DD261114021305001001s
RG3618960695308861442
RG3618961674561404930
RG3618961674561404932
RG3618961674561404934
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-014-04-S05
dependencies：PM-001
PM-007
steps：先找款选择订单时执行清空选择
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：已选笔数和金额为0，下一步状态正确
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W06
path：../development-spec.html#W06

### PM-014-04-S06 先找款选择订单时执行点击订单号
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:06:09.613199+08:00
preconditions：本轮T未回款、R已迁移，U/V未使用；仅只读查询和选择取消
steps：先找款选择订单时执行点击订单号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：打开原订单详情，选择上下文不丢
actual：上述日期结果勾选T，点击DD261114035057001001s链接新开原订单详情；核对客户T、YST售票员、挂帐0.01、未回款、票号56GDWJJ5DL225。原选择弹窗日期、T勾选和合计1笔0.01保持；关闭详情。
result：通过
businessIds：DD261114035057001001s
DD261114034441001001s
RG3619071866242351106
RG3619072244199473154
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-014-04-S06
dependencies：PM-001
PM-007
steps：先找款选择订单时执行点击订单号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：打开原订单详情，选择上下文不丢
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W06
path：../development-spec.html#W06

### PM-014-05 先找款流程重新选择来源
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:06:09.613199+08:00
preconditions：本轮T未回款、R已迁移，U/V未使用；仅只读查询和选择取消
steps：先找款流程重新选择来源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只留当前一笔，原来源未扣款
actual：先选U进入订单选择，再重新选择款项选V进入订单选择；摘要只留V单号/0.02/银行卡POS-SK-02/张悦轩，不累计U；整体取消后U/V均成功未使用，T未回款。
result：通过
businessIds：DD261114035057001001s
DD261114034441001001s
RG3619071866242351106
RG3619072244199473154
verification：W04
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-014-05
dependencies：PM-001
PM-007
steps：先找款流程重新选择来源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只留当前一笔，原来源未扣款
verification：W04
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W06
path：../development-spec.html#W06

### PM-014-05-S02 先找款流程取消
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:16:12.359409+08:00
preconditions：本轮新建E双票订单0.02、F单票订单0.01，客户名和负责人不同；新来源0.04；另有0.01不足来源。
steps：先找款流程取消
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不扣款、不结清、不产生半笔记录
actual：不足来源0.01选E出现不足后清空并取消，原来源仍未使用，E仍未回款并可在新来源流程选择；没有半笔转出或结清记录。
result：通过
businessIds：DD261114021242001001s
DD261114021305001001s
RG3618960695308861442
RG3618961674561404930
RG3618961674561404932
RG3618961674561404934
verification：W04
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-014-05-S02
dependencies：PM-001
PM-007
steps：先找款流程取消
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不扣款、不结清、不产生半笔记录
verification：W04
W06
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W06
path：../development-spec.html#W06

### PM-014-05-S03 一笔来源回款完成后重新进入
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:16:12.359409+08:00
preconditions：本轮新建E双票订单0.02、F单票订单0.01，客户名和负责人不同；新来源0.04；另有0.01不足来源。
steps：一笔来源回款完成后重新进入
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原弹窗已关闭列表刷新，新流程为空，不自动处理下一笔
actual：C回款成功后来源/订单弹窗均关闭、待回款列表刷新且选择0；重新先找款没有自动选择来源、待选订单0，不自动处理下一笔。
result：通过
businessIds：DD261114021242001001s
DD261114021305001001s
RG3618960695308861442
RG3618961674561404930
RG3618961674561404932
RG3618961674561404934
verification：W04
W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮成功未使用来源，金额及日期可核对；使用类分支每次独立来源，不重复消费同一来源。
dataIds：D-01
D-02
D-04
sampleKey：QA-PM-20261111-PM-014-05-S03
dependencies：PM-001
PM-007
steps：一笔来源回款完成后重新进入
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-ALLOC的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原弹窗已关闭列表刷新，新流程为空，不自动处理下一笔
verification：W04
W05
W06
protocolId：P-ALLOC
checkpoints：W02/W04→W12/W13及W14/W15→B05/B08及B09/B10→源/目标账户→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W06
path：../development-spec.html#W06

## PM-015 待认领来源结清及回查
模块：临客列表与回款
预期：充值200、负转出-200、来源已用，余额及逐单状态一致；客户200、公司50、源-250；同日净新增实收0；不可再用，不重复扣款或生成第二组记录
当前：通过

### PM-015-01 来源0.01结清净额0.01（按实际最小商品金额）
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:12:15.160442+08:00
preconditions：本轮自建临客C/D与来源款；正常HTTP测试会话；现金记账，不连接真实收款网关。
steps：来源200结清净额200
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：充值200、负转出-200、来源已用，余额及逐单状态一致
actual：按测试商品最小金额替换示例：来源S=0.01，临客C净额D=0.01。先找款、选择本笔订单、W06来源金额只读0.01，确认后来源已使用、转出-0.01、客户充值+0.01；已回款逐单0.01；后台原消费-0.01仍仅一笔并标已回款。无公司收入。来源详情与客户详情双向关联正确。
result：通过
businessIds：DD261114020724001001s
RG3618954338757263362
RG3618955077491638274
RG3618955077491638276
verification：W06
B04
B05
B09
B11
W16
B12
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-015-01
dependencies：PM-001
steps：来源200结清净额200
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：充值0.01、负转出-0.01、来源已用，余额及逐单状态一致
verification：W06
B04
B05
B09
B11
W16
B12
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

### PM-015-02 来源0.04结清净额0.03并收入0.01（按实际最小商品金额）
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:16:12.359409+08:00
preconditions：本轮新建E双票订单0.02、F单票订单0.01，客户名和负责人不同；新来源0.04；另有0.01不足来源。
steps：来源250结清净额200并收入50
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：客户200、公司50、源-250；同日净新增实收0
actual：0.04来源整笔转出-0.04、公共临客充值+0.03、公司收入+0.01，来源已使用；E已回款0.02、F已回款0.01共用正确客户充值号，原消费各一笔且后台已回款。同日来源使用净额-0.04+0.03+0.01=0，来源原始新入款另计0.04。
result：通过
businessIds：DD261114021242001001s
DD261114021305001001s
RG3618960695308861442
RG3618961674561404930
RG3618961674561404932
RG3618961674561404934
verification：W06
B04
B05
B09
B11
W16
B12
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-015-02
dependencies：PM-001
steps：来源250结清净额200并收入50
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：客户0.03、公司0.01、源-0.04；同日来源使用净新增实收0
verification：W06
B04
B05
B09
B11
W16
B12
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

### PM-015-03 已用来源回到选择入口或旧表单正常再次确认
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:49:39+08:00
preconditions：HTTP QA，YST售票窗口，本轮入款与长期目标已核验，正常UI操作
steps：已用来源回到选择入口或旧表单正常再次确认
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不可再用，不重复扣款或生成第二组记录
actual：本轮原单成功使用后，从正常入口重开来源列表已不可选该单；原单已使用，窗口本日仅原入款/一次负转出/一次目标充值三条记录，未重复记账。未额外制造旧表单提交。
result：通过
businessIds：RG3618929685644984322
RG3618933396496728066
RG3618933396496728068
verification：W06
B04
B05
B09
B11
W16
B12
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-015-03
dependencies：PM-001
steps：已用来源回到选择入口或旧表单正常再次确认
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不可再用，不重复扣款或生成第二组记录
verification：W06
B04
B05
B09
B11
W16
B12
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 B04
path：../development-spec.html#B04
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

## PM-016 多订单差异二次确认
模块：临客列表与回款
预期：可直接继续；首尾空格不造成误差异；提示核实，允许确认继续并保存人时间和订单快照；返回选择；旧确认失效需重新核实；仍拦截，不绕过其他校验
当前：阻塞

### PM-016-01 选择同客户同负责人多单
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：选择同客户同负责人多单
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可直接继续；首尾空格不造成误差异
actual：I/J同一负责人管理员，J客户输入含首尾空格，列表统一显示QA-PM1114临客IJ同主。两笔进入W06并最终提交均未误报客户/负责人差异二次确认，正常结清。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W07
W08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-016-01
dependencies：PM-001
steps：选择同客户同负责人多单
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：可直接继续；首尾空格不造成误差异
verification：W07
W08
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W06
path：../development-spec.html#W06

### PM-016-02 回款选择客户名称不同的多订单人工确认继续
范围：本期必测
结果：阻塞
原因：R10真实回归：R10新样本确实完成不同客户人工确认；后台/窗口回款RG3639024703755730946及迁移RG3639031146206674952详情均仅见申请人、申请/完成时间及关联订单，没有独立确认人、确认时间或确认时订单快照入口。不能据此证明后台未存，仍待可核对的审计证据。
runId：R01
executedAt：2026-11-14T02:16:12.359409+08:00
preconditions：本轮新建E双票订单0.02、F单票订单0.01，客户名和负责人不同；新来源0.04；另有0.01不足来源。
steps：回款选择客户名称不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：不同客户名且负责人管理员/张悦轩的两单，点击确认回款弹出核实同一客户提示；返回核对不入账，再次确认仍要求核实，允许继续后两单成功。当前详情未显示单独的确认人/时间/订单快照，尚未完成该分支持久化字段核验，不标全通过。
result：未跑
businessIds：DD261114021242001001s
DD261114021305001001s
RG3618960695308861442
RG3618961674561404930
RG3618961674561404932
RG3618961674561404934
verification：W06
W07
evidence：
issueIds：
runId：R01
executedAt：2026-11-14T03:36:14.189435+08:00
preconditions：本轮O/P各0.01临客挂帐订单，客户与负责人不同，仅测试数据
steps：回款选择客户名称不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：OP客户名称、负责人分别不同；确认回款触发人工核对，返回后停留编辑页且未收款，再提交仍重新提示，确认同一客户后成功结清0.02；前后台同回款单关联两单，各0.01，列表保留原负责人。尚未发现可见的独立人工确认人/确认时间/确认订单快照字段，不能用申请人及完成时间替代已核实存储，故本复合分支仍未跑完。
result：未跑
businessIds：DD261114033256001001s
DD261114033330001001s
RG3619044034854273026
verification：W06
W07
evidence：
issueIds：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
steps：回款选择客户名称不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：回款及迁移的客户名/负责人不同、多次返回和确认继续已实测，业务单据和关联订单已保存。再次查看B08回款详情及关联散客订单详情，无独立确认人、确认时间、确认时订单快照字段或审计入口；普通申请人/完成时间不等同该审计数据。不能据未展示断言未存储，也不判复合分支通过。
result：阻塞
verification：W06
W07
businessIds：
evidence：
issueIds：
blockerIds：ENV-006
runId：R09
executedAt：2026-11-14T17:19:10.443059+08:00
preconditions：HTTP QA后台西瓜，复用本轮已确认业务单，不新增交易或配置变更
steps：回款选择客户名称不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：R09再次查看回款RG3619044034854273026（O/P两单各0.01）及往来调账RG3619058259785957383（R/S净迁移0.02），并逐一回查订单DD261114033256001001s、DD261114033330001001s、DD261114034441001001s、DD261114034513001001s。O/P分别保留客户名和张悦轩/管理员负责人，均已回款；R/S归QA-PM1114个人预付RS/A3619058259785957377，变更表显示YST售票窗口、2026-11-14 03:48:36。未见独立人工确认人、确认时间、确认时订单快照字段或查询入口。普通申请人/完成时刻及迁移变更表不能替代确认审计。要求开发按上述单据提供可核验证据；未据页面缺少展示断言后台未保存，不新增业务缺陷。
result：阻塞
businessIds：RG3619044034854273026
RG3619058259785957383
verification：B05
B08
B12
原订单详情
evidence：
issueIds：
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：R10新样本确实完成不同客户人工确认；后台/窗口回款RG3639024703755730946及迁移RG3639031146206674952详情均仅见申请人、申请/完成时间及关联订单，没有独立确认人、确认时间或确认时订单快照入口。不能据此证明后台未存，仍待可核对的审计证据。
result：阻塞
businessIds：
verification：W06
W07
evidence：
issueIds：
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-016-02
dependencies：PM-001
steps：回款选择客户名称不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
verification：W06
W07
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W06
path：../development-spec.html#W06

### PM-016-02-S02 回款选择负责人不同的多订单人工确认继续
范围：本期必测
结果：阻塞
原因：R10真实回归：R10新样本确实完成不同客户人工确认；后台/窗口回款RG3639024703755730946及迁移RG3639031146206674952详情均仅见申请人、申请/完成时间及关联订单，没有独立确认人、确认时间或确认时订单快照入口。不能据此证明后台未存，仍待可核对的审计证据。
runId：R01
executedAt：2026-11-14T03:36:14.189435+08:00
preconditions：本轮O/P各0.01临客挂帐订单，客户与负责人不同，仅测试数据
steps：回款选择负责人不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：OP客户名称、负责人分别不同；确认回款触发人工核对，返回后停留编辑页且未收款，再提交仍重新提示，确认同一客户后成功结清0.02；前后台同回款单关联两单，各0.01，列表保留原负责人。尚未发现可见的独立人工确认人/确认时间/确认订单快照字段，不能用申请人及完成时间替代已核实存储，故本复合分支仍未跑完。
result：未跑
businessIds：DD261114033256001001s
DD261114033330001001s
RG3619044034854273026
verification：W06
W07
evidence：
issueIds：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
steps：回款选择负责人不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：回款及迁移的客户名/负责人不同、多次返回和确认继续已实测，业务单据和关联订单已保存。再次查看B08回款详情及关联散客订单详情，无独立确认人、确认时间、确认时订单快照字段或审计入口；普通申请人/完成时间不等同该审计数据。不能据未展示断言未存储，也不判复合分支通过。
result：阻塞
verification：W06
W07
businessIds：
evidence：
issueIds：
blockerIds：ENV-006
runId：R09
executedAt：2026-11-14T17:19:10.443059+08:00
preconditions：HTTP QA后台西瓜，复用本轮已确认业务单，不新增交易或配置变更
steps：回款选择负责人不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：R09再次查看回款RG3619044034854273026（O/P两单各0.01）及往来调账RG3619058259785957383（R/S净迁移0.02），并逐一回查订单DD261114033256001001s、DD261114033330001001s、DD261114034441001001s、DD261114034513001001s。O/P分别保留客户名和张悦轩/管理员负责人，均已回款；R/S归QA-PM1114个人预付RS/A3619058259785957377，变更表显示YST售票窗口、2026-11-14 03:48:36。未见独立人工确认人、确认时间、确认时订单快照字段或查询入口。普通申请人/完成时刻及迁移变更表不能替代确认审计。要求开发按上述单据提供可核验证据；未据页面缺少展示断言后台未保存，不新增业务缺陷。
result：阻塞
businessIds：RG3619044034854273026
RG3619058259785957383
verification：B05
B08
B12
原订单详情
evidence：
issueIds：
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：R10新样本确实完成不同客户人工确认；后台/窗口回款RG3639024703755730946及迁移RG3639031146206674952详情均仅见申请人、申请/完成时间及关联订单，没有独立确认人、确认时间或确认时订单快照入口。不能据此证明后台未存，仍待可核对的审计证据。
result：阻塞
businessIds：
verification：W06
W07
evidence：
issueIds：
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-016-02-S02
dependencies：PM-001
steps：回款选择负责人不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
verification：W06
W07
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W06
path：../development-spec.html#W06

### PM-016-02-S03 迁移选择客户名称不同的多订单人工确认继续
范围：本期必测
结果：阻塞
原因：R10真实回归：R10新样本确实完成不同客户人工确认；后台/窗口回款RG3639024703755730946及迁移RG3639031146206674952详情均仅见申请人、申请/完成时间及关联订单，没有独立确认人、确认时间或确认时订单快照入口。不能据此证明后台未存，仍待可核对的审计证据。
runId：R01
executedAt：2026-11-14T03:50:08.812873+08:00
preconditions：本轮R/S客户及负责人不同
steps：迁移选择客户名称不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：迁移第一步下一步提示同客户确认，返回及改变选择均重新提示；确认继续后成功新建个人预付并迁移两单。业务结果已回查；独立确认人、确认时间和确认时订单快照的存储尚未得到可见证据，不以普通操作人/时间替代，复合分支未跑完。
result：未跑
businessIds：DD261114034441001001s
DD261114034513001001s
A3619058259785957377
RG3619058259785957383
MG9d908d1fbac53676d7df668658c1
verification：W08
W07
evidence：
issueIds：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
steps：迁移选择客户名称不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：回款及迁移的客户名/负责人不同、多次返回和确认继续已实测，业务单据和关联订单已保存。再次查看B08回款详情及关联散客订单详情，无独立确认人、确认时间、确认时订单快照字段或审计入口；普通申请人/完成时间不等同该审计数据。不能据未展示断言未存储，也不判复合分支通过。
result：阻塞
verification：W08
W07
businessIds：
evidence：
issueIds：
blockerIds：ENV-006
runId：R09
executedAt：2026-11-14T17:19:10.443059+08:00
preconditions：HTTP QA后台西瓜，复用本轮已确认业务单，不新增交易或配置变更
steps：迁移选择客户名称不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：R09再次查看回款RG3619044034854273026（O/P两单各0.01）及往来调账RG3619058259785957383（R/S净迁移0.02），并逐一回查订单DD261114033256001001s、DD261114033330001001s、DD261114034441001001s、DD261114034513001001s。O/P分别保留客户名和张悦轩/管理员负责人，均已回款；R/S归QA-PM1114个人预付RS/A3619058259785957377，变更表显示YST售票窗口、2026-11-14 03:48:36。未见独立人工确认人、确认时间、确认时订单快照字段或查询入口。普通申请人/完成时刻及迁移变更表不能替代确认审计。要求开发按上述单据提供可核验证据；未据页面缺少展示断言后台未保存，不新增业务缺陷。
result：阻塞
businessIds：RG3619044034854273026
RG3619058259785957383
verification：B05
B08
B12
原订单详情
evidence：
issueIds：
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：R10新样本确实完成不同客户人工确认；后台/窗口回款RG3639024703755730946及迁移RG3639031146206674952详情均仅见申请人、申请/完成时间及关联订单，没有独立确认人、确认时间或确认时订单快照入口。不能据此证明后台未存，仍待可核对的审计证据。
result：阻塞
businessIds：
verification：W08
W07
evidence：
issueIds：
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-016-02-S03
dependencies：PM-001
steps：迁移选择客户名称不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
verification：W08
W07
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W06
path：../development-spec.html#W06

### PM-016-02-S04 迁移选择负责人不同的多订单人工确认继续
范围：本期必测
结果：阻塞
原因：R10真实回归：R10新样本确实完成不同客户人工确认；后台/窗口回款RG3639024703755730946及迁移RG3639031146206674952详情均仅见申请人、申请/完成时间及关联订单，没有独立确认人、确认时间或确认时订单快照入口。不能据此证明后台未存，仍待可核对的审计证据。
runId：R01
executedAt：2026-11-14T03:50:08.812873+08:00
preconditions：本轮R/S客户及负责人不同
steps：迁移选择负责人不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：迁移第一步下一步提示同客户确认，返回及改变选择均重新提示；确认继续后成功新建个人预付并迁移两单。业务结果已回查；独立确认人、确认时间和确认时订单快照的存储尚未得到可见证据，不以普通操作人/时间替代，复合分支未跑完。
result：未跑
businessIds：DD261114034441001001s
DD261114034513001001s
A3619058259785957377
RG3619058259785957383
MG9d908d1fbac53676d7df668658c1
verification：W08
W07
evidence：
issueIds：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
steps：迁移选择负责人不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：回款及迁移的客户名/负责人不同、多次返回和确认继续已实测，业务单据和关联订单已保存。再次查看B08回款详情及关联散客订单详情，无独立确认人、确认时间、确认时订单快照字段或审计入口；普通申请人/完成时间不等同该审计数据。不能据未展示断言未存储，也不判复合分支通过。
result：阻塞
verification：W08
W07
businessIds：
evidence：
issueIds：
blockerIds：ENV-006
runId：R09
executedAt：2026-11-14T17:19:10.443059+08:00
preconditions：HTTP QA后台西瓜，复用本轮已确认业务单，不新增交易或配置变更
steps：迁移选择负责人不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：R09再次查看回款RG3619044034854273026（O/P两单各0.01）及往来调账RG3619058259785957383（R/S净迁移0.02），并逐一回查订单DD261114033256001001s、DD261114033330001001s、DD261114034441001001s、DD261114034513001001s。O/P分别保留客户名和张悦轩/管理员负责人，均已回款；R/S归QA-PM1114个人预付RS/A3619058259785957377，变更表显示YST售票窗口、2026-11-14 03:48:36。未见独立人工确认人、确认时间、确认时订单快照字段或查询入口。普通申请人/完成时刻及迁移变更表不能替代确认审计。要求开发按上述单据提供可核验证据；未据页面缺少展示断言后台未保存，不新增业务缺陷。
result：阻塞
businessIds：RG3619044034854273026
RG3619058259785957383
verification：B05
B08
B12
原订单详情
evidence：
issueIds：
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
actual：R10新样本确实完成不同客户人工确认；后台/窗口回款RG3639024703755730946及迁移RG3639031146206674952详情均仅见申请人、申请/完成时间及关联订单，没有独立确认人、确认时间或确认时订单快照入口。不能据此证明后台未存，仍待可核对的审计证据。
result：阻塞
businessIds：
verification：W08
W07
evidence：
issueIds：
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-016-02-S04
dependencies：PM-001
steps：迁移选择负责人不同的多订单人工确认继续
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示核实且允许继续；保存确认人时间和订单快照；不硬性禁止
verification：W08
W07
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W06
path：../development-spec.html#W06

### PM-016-03 回款二次确认时返回修改
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:36:14.189435+08:00
preconditions：本轮O/P各0.01临客挂帐订单，客户与负责人不同，仅测试数据
steps：回款二次确认时返回修改
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：返回编辑或核对流程，不产生业务变更，可重新调整订单后再确认
actual：OP回款差异二次确认点击返回核对，仅关闭提示回到W06编辑页，两单及0.02草稿仍在，未执行回款；再次提交仍弹人工核对。后续另经最终确认才生成RG3619044034854273026。
result：通过
businessIds：DD261114033256001001s
DD261114033330001001s
RG3619044034854273026
verification：W06
W07
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-016-03
dependencies：PM-001
steps：回款二次确认时返回修改
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：返回编辑或核对流程，不产生业务变更，可重新调整订单后再确认
verification：W06
W07
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W06
path：../development-spec.html#W06

### PM-016-03-S02 回款二次确认时改变订单选择
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:50:08.812873+08:00
preconditions：本轮R/S各0.01临客订单，客户名称及负责人不同；未使用历史订单
steps：回款二次确认时改变订单选择
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原确认失效，差异仍存在时重新确认
actual：R/S差异提示返回核对后关闭W06，列表取消S再重新勾选；新开W06重新填写实收0.02提交，再次出现同客户人工核对。未沿用之前核对，不写回款。
result：通过
businessIds：DD261114034441001001s
DD261114034513001001s
A3619058259785957377
RG3619058259785957383
MG9d908d1fbac53676d7df668658c1
verification：W06
W07
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-016-03-S02
dependencies：PM-001
steps：回款二次确认时改变订单选择
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原确认失效，差异仍存在时重新确认
verification：W06
W07
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W06
path：../development-spec.html#W06

### PM-016-03-S03 迁移二次确认时返回修改
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:50:08.812873+08:00
preconditions：本轮R/S各0.01临客订单，客户名称及负责人不同；未使用历史订单
steps：迁移二次确认时返回修改
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：返回编辑或核对流程，不产生业务变更，可重新调整订单后再确认
actual：迁移第一步两单客户和负责人不同，下一步出现同客户提示；返回修改只回到迁移第一步，两单及0.02仍在，尚无档案/迁移。
result：通过
businessIds：DD261114034441001001s
DD261114034513001001s
A3619058259785957377
RG3619058259785957383
MG9d908d1fbac53676d7df668658c1
verification：W08
W07
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-016-03-S03
dependencies：PM-001
steps：迁移二次确认时返回修改
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：返回编辑或核对流程，不产生业务变更，可重新调整订单后再确认
verification：W08
W07
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W06
path：../development-spec.html#W06

### PM-016-03-S04 迁移二次确认时改变订单选择
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:50:08.812873+08:00
preconditions：本轮R/S各0.01临客订单，客户名称及负责人不同；未使用历史订单
steps：迁移二次确认时改变订单选择
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原确认失效，差异仍存在时重新确认
actual：迁移核对返回后取消第一步，在列表取消S再重选S，新开迁移下一步重新出现同客户人工确认，原提示不被复用。
result：通过
businessIds：DD261114034441001001s
DD261114034513001001s
A3619058259785957377
RG3619058259785957383
MG9d908d1fbac53676d7df668658c1
verification：W08
W07
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-016-03-S04
dependencies：PM-001
steps：迁移二次确认时改变订单选择
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原确认失效，差异仍存在时重新确认
verification：W08
W07
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W06
path：../development-spec.html#W06

### PM-016-04 回款人工确认后设置金额不足
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:50:08.812873+08:00
preconditions：本轮R/S各0.01临客订单，客户名称及负责人不同；未使用历史订单
steps：回款人工确认后设置金额不足
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：金额保护照常拦截
actual：R/S差异人工核对返回编辑后将本次收款0.02改0.01，显示本次收款不足还差0.01且确认回款禁用；已出现的人工核对不能放开金额保护。
result：通过
businessIds：DD261114034441001001s
DD261114034513001001s
A3619058259785957377
RG3619058259785957383
MG9d908d1fbac53676d7df668658c1
verification：W06
W07
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-016-04
dependencies：PM-001
steps：回款人工确认后设置金额不足
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：金额保护照常拦截
verification：W06
W07
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W06
path：../development-spec.html#W06

### PM-016-04-S02 回款人工确认后设置未来支付日期
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:50:08.812873+08:00
preconditions：本轮R/S各0.01临客订单，客户名称及负责人不同；未使用历史订单
steps：回款人工确认后设置未来支付日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：日期保护照常拦截
actual：R/S人工核对返回后恢复收款0.02，输入未来2026-11-15并离开输入框，日期恢复2026-11-14，不能采用未来日期。本次未写回款。
result：通过
businessIds：DD261114034441001001s
DD261114034513001001s
A3619058259785957377
RG3619058259785957383
MG9d908d1fbac53676d7df668658c1
verification：W06
W07
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮临客挂帐订单，记录总额、成功退款、净额和原售票员；取消/结清/退款样本分开。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-016-04-S02
dependencies：PM-001
steps：回款人工确认后设置未来支付日期
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-SETTLE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：日期保护照常拦截
verification：W06
W07
protocolId：P-SETTLE
checkpoints：W05/W06→R01逐单→W12/W13及W14/W15→后台同一单→B11→W16/B12
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W07
path：../development-spec.html#W07
label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W06
path：../development-spec.html#W06

## PM-017 迁移选择与新建目标
模块：临客迁移
预期：净额与订单一致，订单可查看；不作为回款；沿原必填长度去空唯一规则；档案双账户和迁移一起成功；原建档校验生效，失败不留空档案；无档案、账户或订单归属变更
当前：阻塞

### PM-017-01 选择临客订单进入迁移
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:12:15.160442+08:00
preconditions：本轮自建临客C/D与来源款；正常HTTP测试会话；现金记账，不连接真实收款网关。
steps：选择临客订单进入迁移
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：净额与订单一致，订单可查看；不作为回款
actual：临客D净额=订单0.01-退款0=0.01，迁移第一步显示本笔订单与负责人管理员、原售票员YST、净额；第二步迁移至已有企业默认预付款。成功后原公共临客消费保持未回款，非回款处理。订单详情可见现伙伴、账户、变更记录及原开单人。
result：通过
businessIds：DD261114020931001001s
RG3618957345234370562
A3606358539707891713
verification：W08
W09
W10
W11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-017-01
dependencies：PM-001
steps：选择临客订单进入迁移
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：净额与订单一致，订单可查看；不作为回款
verification：W08
W09
W10
W11
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W09
path：../development-spec.html#W09
label：增补20号 W10
path：../development-spec.html#W10
label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01

### PM-017-02 新建企业目标，默认挂帐承接迁移
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:32:23.328984+08:00
preconditions：本轮N临客订单1张0.01元，未退款未回款；新建企业挂帐目标
steps：新建企业目标，默认挂帐承接迁移
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原建档字段校验通过；档案与双账户及迁移一起完成，无额外收款，不留孤立档案
actual：N订单迁移完成后退出公共临客待回款；新企业QA-PM1114企业挂帐N、账户A3619039310390247425同时生成。后台挂帐-0.01、预付款0.00，原公共账户仅调账-往来+0.01 RG3619039310390247430，目标仅订单消费-0.01，迁移号MGddb64594053beb31762468a5de12，无新增收款。刷新原订单归属新企业、保留客户名称/原售票员/下单支付时间与挂帐方式，变更记录可追溯。
result：通过
businessIds：DD261114032925001001s
A3619039310390247425
RG3619039310390247430
MGddb64594053beb31762468a5de12
verification：W08
W09
W10
R01
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-017-02
dependencies：PM-001
steps：新建企业目标，默认挂帐承接迁移
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原建档字段校验通过；档案与双账户及迁移一起完成，无额外收款，不留孤立档案
verification：W08
W09
W10
R01
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W09
path：../development-spec.html#W09
label：增补20号 W10
path：../development-spec.html#W10
label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01

### PM-017-02-S02 新建企业目标，默认预付款承接迁移
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:20:20.065139+08:00
preconditions：本轮G临客订单及新建企业迁移；测试虚构联系人信息。
steps：新建企业目标，默认预付款承接迁移
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原建档字段校验通过；档案与双账户及迁移一起完成，无额外收款，不留孤立档案
actual：本轮G订单0.01，迁移新建企业QA-PM1114迁移企业G，默认预付款。后台档案启用、账户A3618964766937858049有挂帐0.00及预付款-0.01两账户；目标流水仅本笔消费-0.01，无额外收款。订单现归企业、原售票员YST保留，并有变更人/时间。原公共临客往来调账RG3618964766937858054。
result：通过
businessIds：DD261114021628001001s
A3618964766937858049
MG14994b7612e6e0983cd1b6fea577
RG3618964766937858054
verification：W08
W09
W10
R01
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-017-02-S02
dependencies：PM-001
steps：新建企业目标，默认预付款承接迁移
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原建档字段校验通过；档案与双账户及迁移一起完成，无额外收款，不留孤立档案
verification：W08
W09
W10
R01
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W09
path：../development-spec.html#W09
label：增补20号 W10
path：../development-spec.html#W10
label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01

### PM-017-02-S03 新建个人目标，默认挂帐承接迁移
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:43:42.890405+08:00
preconditions：本轮Q两票挂帐0.02，单张成功退款0.01后迁移，仅本轮测试数据
steps：新建个人目标，默认挂帐承接迁移
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原建档字段校验通过；档案与双账户及迁移一起完成，无额外收款，不留孤立档案
actual：Q两票0.02、成功退款0.01，新建个人挂帐目标QA-PM1114个人挂帐Q净迁移0.01；档案与挂帐-0.01、预付款0.00同时建立。原公共账户调账往来+0.01，无新收款。原订单归属新目标，保留客户、原售票员和原挂帐支付信息。目标退款流水错号单独归PM-BUG-008。
result：通过
businessIds：DD261114033701001001s
LYAS3619047264581386240
A3619050752183123969
RG3619050752183123975
MGf03ca0f96a921eaf2a80225dd850
verification：W08
W09
W10
R01
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-017-02-S03
dependencies：PM-001
steps：新建个人目标，默认挂帐承接迁移
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原建档字段校验通过；档案与双账户及迁移一起完成，无额外收款，不留孤立档案
verification：W08
W09
W10
R01
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W09
path：../development-spec.html#W09
label：增补20号 W10
path：../development-spec.html#W10
label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01

### PM-017-02-S04 新建个人目标，默认预付款承接迁移
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:50:08.812873+08:00
preconditions：本轮R/S各0.01临客订单，客户名称及负责人不同；未使用历史订单
steps：新建个人目标，默认预付款承接迁移
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原建档字段校验通过；档案与双账户及迁移一起完成，无额外收款，不留孤立档案
actual：确认R/S为同客户后新建个人默认预付款QA-PM1114个人预付RS，双账户同时建立；预付款-0.02、挂帐0，目标仅两笔消费各-0.01。原公共账户调账往来+0.02、关联两原单。原订单R刷新显示新目标和迁移变更记录，原售票员及原挂帐支付保留。日报仍300.14，无新增实收。
result：通过
businessIds：DD261114034441001001s
DD261114034513001001s
A3619058259785957377
RG3619058259785957383
MG9d908d1fbac53676d7df668658c1
verification：W08
W09
W10
R01
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-017-02-S04
dependencies：PM-001
steps：新建个人目标，默认预付款承接迁移
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原建档字段校验通过；档案与双账户及迁移一起完成，无额外收款，不留孤立档案
verification：W08
W09
W10
R01
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W09
path：../development-spec.html#W09
label：增补20号 W10
path：../development-spec.html#W10
label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01

### PM-017-03 新建目标填写空白名称
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:20:20.065139+08:00
preconditions：本轮G临客订单及新建企业迁移；测试虚构联系人信息。
steps：新建目标填写空白名称
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原必填、去空、唯一性或长度规则正常拦截，不新建空档案，不迁移订单
actual：其余必填合法时名称填3空格点击确认，提示“合作伙伴名称不能为空字符”，未提交迁移，恢复合法名后继续。
result：通过
businessIds：DD261114021628001001s
A3618964766937858049
MG14994b7612e6e0983cd1b6fea577
RG3618964766937858054
verification：W10
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-017-03
dependencies：PM-001
steps：新建目标填写空白名称
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原必填、去空、唯一性或长度规则正常拦截，不新建空档案，不迁移订单
verification：W10
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W09
path：../development-spec.html#W09
label：增补20号 W10
path：../development-spec.html#W10
label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01

### PM-017-03-S02 新建目标填写本轮已存在名称
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:17:16.321877+08:00
preconditions：复用R01真实单据及本轮正常操作结果，不追加故障或并发
steps：提交完整重复名称表单
保留其他字段，仅改唯一名称作正常成功对照
回查原G/新AA档案、双账户、原订单、目标资金流水与报表
expected：原必填、去空、唯一性或长度规则正常拦截，不新建空档案，不迁移订单
actual：AA订单0.01新建目标完整必填表单填写本轮已有QA-PM1114迁移企业G，提交被拒绝“合作伙伴请求幂等键冲突”，表单及原待回款订单保留。仅改成唯一名称QA-PM1114同名校验目标AA后迁移成功。后台原G仍仅1档，唯一AA仅1档，账户A3619146993810292737预付-0.01/挂帐0.00；原订单仅1条05:14:41变更记录，B11目标仅1条-0.01消费，W16总额保持300.26。实际拒绝文案为技术提示，不宣称明确同名提示；唯一性内部实现未核验。
result：通过
businessIds：DD261114051304001001s
A3619146993810292737
MG995f3c8b21320c33ce27c254b915
verification：W10
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-017-03-S02
dependencies：PM-001
steps：新建目标填写本轮已存在名称
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原必填、去空、唯一性或长度规则正常拦截，不新建空档案，不迁移订单
verification：W10
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W09
path：../development-spec.html#W09
label：增补20号 W10
path：../development-spec.html#W10
label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01

### PM-017-03-S03 新建目标填写26字名称
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:20:20.065139+08:00
preconditions：本轮G临客订单及新建企业迁移；测试虚构联系人信息。
steps：新建目标填写26字名称
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原必填、去空、唯一性或长度规则正常拦截，不新建空档案，不迁移订单
actual：正常逐字键入26个甲，实际保留25字；maxLength=25。没有将工具fill可越过HTML长度限制当作正常输入缺陷。恢复唯一合法名后成功。
result：通过
businessIds：DD261114021628001001s
A3618964766937858049
MG14994b7612e6e0983cd1b6fea577
RG3618964766937858054
verification：W10
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-017-03-S03
dependencies：PM-001
steps：新建目标填写26字名称
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原必填、去空、唯一性或长度规则正常拦截，不新建空档案，不迁移订单
verification：W10
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W09
path：../development-spec.html#W09
label：增补20号 W10
path：../development-spec.html#W10
label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01

### PM-017-03-S04 新建目标填写联系人为空
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:20:20.065139+08:00
preconditions：本轮G临客订单及新建企业迁移；测试虚构联系人信息。
steps：新建目标填写联系人为空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原必填、去空、唯一性或长度规则正常拦截，不新建空档案，不迁移订单
actual：其余必填合法，联系人清空点击确认提示请输入联系人，不提交；恢复合法值后继续。
result：通过
businessIds：DD261114021628001001s
A3618964766937858049
MG14994b7612e6e0983cd1b6fea577
RG3618964766937858054
verification：W10
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-017-03-S04
dependencies：PM-001
steps：新建目标填写联系人为空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原必填、去空、唯一性或长度规则正常拦截，不新建空档案，不迁移订单
verification：W10
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W09
path：../development-spec.html#W09
label：增补20号 W10
path：../development-spec.html#W10
label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01

### PM-017-03-S05 新建目标填写16字联系人
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:20:20.065139+08:00
preconditions：本轮G临客订单及新建企业迁移；测试虚构联系人信息。
steps：新建目标填写16字联系人
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原必填、去空、唯一性或长度规则正常拦截，不新建空档案，不迁移订单
actual：正常逐字键入16个乙，实际保留15字，maxLength=15；恢复合法联系人后继续。
result：通过
businessIds：DD261114021628001001s
A3618964766937858049
MG14994b7612e6e0983cd1b6fea577
RG3618964766937858054
verification：W10
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-017-03-S05
dependencies：PM-001
steps：新建目标填写16字联系人
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原必填、去空、唯一性或长度规则正常拦截，不新建空档案，不迁移订单
verification：W10
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W09
path：../development-spec.html#W09
label：增补20号 W10
path：../development-spec.html#W10
label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01

### PM-017-03-S06 新建目标填写联系电话为空
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:20:20.065139+08:00
preconditions：本轮G临客订单及新建企业迁移；测试虚构联系人信息。
steps：新建目标填写联系电话为空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原必填、去空、唯一性或长度规则正常拦截，不新建空档案，不迁移订单
actual：其余必填合法，联系电话清空点击确认提示请输入联系电话，不提交；恢复合成测试电话后继续。
result：通过
businessIds：DD261114021628001001s
A3618964766937858049
MG14994b7612e6e0983cd1b6fea577
RG3618964766937858054
verification：W10
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-017-03-S06
dependencies：PM-001
steps：新建目标填写联系电话为空
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原必填、去空、唯一性或长度规则正常拦截，不新建空档案，不迁移订单
verification：W10
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W09
path：../development-spec.html#W09
label：增补20号 W10
path：../development-spec.html#W10
label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01

### PM-017-03-S07 新建目标填写16字联系电话
范围：本期必测
结果：阻塞
原因：
runId：R01
executedAt：2026-11-14T04:09:02.216455
result：未跑
actual：已打开本轮T迁移新建目标；电话输入控件maxLength15，但工具将拟填内容替换成脱敏占位文本，实际非16字电话样本；已取消，没有真实边界结论，不将正则提示算产品缺陷。
evidence：
issueIds：
businessIds：DD261114035057001001s
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
steps：新建目标填写16字联系电话
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原必填、去空、唯一性或长度规则正常拦截，不新建空档案，不迁移订单
actual：再次通过正常迁移新建目标输入16个零，DOM实际value为脱敏占位文本、length10、maxLength15，仍非16字样本，不能据属性直接判通过。迁移草稿已取消，订单AB仍未回款/未迁移，已清空选择。
result：阻塞
verification：W10
businessIds：
evidence：
issueIds：
blockerIds：ENV-007
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-017-03-S07
dependencies：PM-001
steps：新建目标填写16字联系电话
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原必填、去空、唯一性或长度规则正常拦截，不新建空档案，不迁移订单
verification：W10
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W09
path：../development-spec.html#W09
label：增补20号 W10
path：../development-spec.html#W10
label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01

### PM-017-04 迁移过程逐步返回或取消
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:43:42.890405+08:00
preconditions：本轮Q两票挂帐0.02，单张成功退款0.01后迁移，仅本轮测试数据
steps：迁移过程逐步返回或取消
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：无档案、账户或订单归属变更
actual：Q迁移第二步输入QA-PM1114取消草稿Q后返回第一步并取消。刷新Q仍在公共临客待回款；后台检索取消草稿Q无档案。随后重新进入另建个人挂帐Q，取消草稿未创建。
result：通过
businessIds：DD261114033701001001s
LYAS3619047264581386240
A3619050752183123969
RG3619050752183123975
MGf03ca0f96a921eaf2a80225dd850
verification：W08
W09
W10
W11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-017-04
dependencies：PM-001
steps：迁移过程逐步返回或取消
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：无档案、账户或订单归属变更
verification：W08
W09
W10
W11
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W08
path：../development-spec.html#W08
label：增补20号 W09
path：../development-spec.html#W09
label：增补20号 W10
path：../development-spec.html#W10
label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01

## PM-018 已有目标及额度不足迁移
模块：临客迁移
预期：实时带入默认账户、额度及余额；排除公共临客待认领禁用对象；本次迁移不拦截；后续新消费仍按原限制；消费退款及调账往来按原规则迁移，原开单人保留，本次人窗口新增；不标已回款、退出候选、无窗口充值实收，调账归正确标签
当前：通过

### PM-018-01 已有目标选择启用企业
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:12:15.160442+08:00
preconditions：本轮自建临客C/D与来源款；正常HTTP测试会话；现金记账，不连接真实收款网关。
steps：已有目标选择启用企业
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：正确带入账户余额额度及档案
actual：选择启用企业QA2-W10预付伙伴1105，带入账户A3606358539707891713、联系人QA测试、负责人管理员、默认预付款、余额399.99、挂帐额度0和可用挂帐无限额；迁移后后台余额399.98。
result：通过
businessIds：DD261114020931001001s
RG3618957345234370562
A3606358539707891713
verification：W11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-018-01
dependencies：PM-001
steps：已有目标选择启用企业
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：正确带入账户余额额度及档案
verification：W11
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16

### PM-018-01-S02 已有目标选择启用个人
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:43:42.890405+08:00
preconditions：本轮Q两票挂帐0.02，单张成功退款0.01后迁移，仅本轮测试数据
steps：已有目标选择启用个人
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：正确带入账户余额额度及档案
actual：已有个人1104可检出，回显账户A3605087521446051840、联系人测试联系人、13400000000、负责人test666、默认挂帐、挂帐-149.99、额度0.00和无限额、预付款0.00，与本轮最新状态一致。未提交迁入该旧个人。
result：通过
businessIds：DD261114033701001001s
LYAS3619047264581386240
A3619050752183123969
RG3619050752183123975
MGf03ca0f96a921eaf2a80225dd850
verification：W11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-018-01-S02
dependencies：PM-001
steps：已有目标选择启用个人
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：正确带入账户余额额度及档案
verification：W11
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16

### PM-018-01-S03 已有目标选择公共临客
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:43:42.890405+08:00
preconditions：本轮Q两票挂帐0.02，单张成功退款0.01后迁移，仅本轮测试数据
steps：已有目标选择公共临客
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不可作为目标
actual：已有目标检索公共，候选为空；同入口普通个人1104可以检出，公共临客不可选。
result：通过
businessIds：DD261114033701001001s
LYAS3619047264581386240
A3619050752183123969
RG3619050752183123975
MGf03ca0f96a921eaf2a80225dd850
verification：W11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-018-01-S03
dependencies：PM-001
steps：已有目标选择公共临客
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不可作为目标
verification：W11
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16

### PM-018-01-S04 已有目标选择待认领客户
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:43:42.890405+08:00
preconditions：本轮Q两票挂帐0.02，单张成功退款0.01后迁移，仅本轮测试数据
steps：已有目标选择待认领客户
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不可作为目标
actual：已有目标检索待认领，候选为空；同入口普通个人1104可以检出，待认领不可选。
result：通过
businessIds：DD261114033701001001s
LYAS3619047264581386240
A3619050752183123969
RG3619050752183123975
MGf03ca0f96a921eaf2a80225dd850
verification：W11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-018-01-S04
dependencies：PM-001
steps：已有目标选择待认领客户
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不可作为目标
verification：W11
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16

### PM-018-01-S05 已有目标选择禁用伙伴
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:09:02.216455
preconditions：本轮自建N已启用，临时禁用；T未回款
steps：已有目标选择禁用伙伴
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不可作为目标
actual：N临时禁用后，T迁移选择已有目标精确搜QA-PM1114企业挂帐N暂无数据；取消无迁移。禁用列表核对N禁用后恢复启用，切启用筛选查询确认N启用。
result：通过
businessIds：A3619039310390247425
DD261114035057001001s
verification：W11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-018-01-S05
dependencies：PM-001
steps：已有目标选择禁用伙伴
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不可作为目标
verification：W11
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16

### PM-018-02 目标默认挂帐且额度限制开启、余额／额度不足时迁移
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:11:41.450737
result：未跑
actual：迁移主要部分已实测：Q默认挂帐、限制开启、额度0.01/余额-0.01/可用0，T净额0.01迁移成功，目标余额-0.02、公共平账+0.01，原订单归属和变更记录一致。尚未核对后续新消费额度保护，保留部分验证不计全通过。限制已恢复禁用；本轮自建Q额度因UI最小0.01无法复原0，已登记。
businessIds：DD261114035057001001s
RG3619080438997073922
MGe155f6698c7e8d471bf20ed84e58
evidence：
issueIds：
runId：R01
executedAt：2026-11-14T04:13:51.098263
preconditions：本轮Q、T及正常UI，授权测试环境
steps：目标默认挂帐且额度限制开启、余额／额度不足时迁移
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：迁移成功，不因已有消费归属转移被额度阻断；后续新消费额度规则不变
actual：迁移前Q默认挂帐、额度限制开启、额度0.01/余额-0.01/可用0，T净0.01迁移成功，目标余额-0.02、公共调账+0.01，原单归属及变更记录一致。迁移后再次启用同额度，选Q及97274非实名票0.01、姓名验收额度保护，确认出票被拒“对不起，该合作伙伴可用挂帐额度不足，请先充值或联系对接负责人调整挂帐额度后再试。”取消出票并清购物车，最近订单仍T，后台余额-0.02，流水仍原3条无新增。限制恢复禁用；自建Q额度正常UI最低0.01无法复原0，已登记保留。
result：通过
businessIds：DD261114035057001001s
A3619050752183123969
RG3619080438997073922
verification：W11
R01
B11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-018-02
dependencies：PM-001
steps：目标默认挂帐且额度限制开启、余额／额度不足时迁移
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：迁移成功，不因已有消费归属转移被额度阻断；后续新消费额度规则不变
verification：W11
R01
B11
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16

### PM-018-02-S02 目标默认预付款且额度限制开启、余额／额度不足时迁移
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:24:10.788294+08:00
preconditions：本轮自建数据，HTTP正常测试会话
steps：目标默认预付款且额度限制开启、余额／额度不足时迁移
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：迁移成功，不因已有消费归属转移被额度阻断；后续新消费额度规则不变
actual：自建企业G默认预付款余额-0.01；登记原值禁用并正常确认启用额度限制。把新临客H净额0.01迁至G成功，余额变-0.02；随后使用G正常新增0.01售票、确认出票，被“该合作伙伴预付款余额不足，请先充值后再试”拦截，取消草稿。目标流水仅G/H两笔迁移消费，无新增消费。额度限制恢复禁用，刷新回查-0.02/禁用。
result：通过
businessIds：DD261114022112001001s
A3618964766937858049
MGdcedba945537e4bd3eea8aa7e62c
verification：W11
R01
B11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-018-02-S02
dependencies：PM-001
steps：目标默认预付款且额度限制开启、余额／额度不足时迁移
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：迁移成功，不因已有消费归属转移被额度阻断；后续新消费额度规则不变
verification：W11
R01
B11
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16

### PM-018-03 迁移包含部分退款订单并查看订单流水
范围：本期必测
结果：通过
原因：R10真实回归：本轮新造C两票0.02退一张0.01，与D0.01合并迁移净0.02。目标消费-0.02/-0.01、退款+0.01，退款列为实际LYAS3639028826832437248，可点入原C订单售后单且退款成功；原旧DD格式数据仍保留历史，未据此误判新修复。
runId：R01
executedAt：2026-11-14T03:43:42.890405+08:00
preconditions：本轮Q两票挂帐0.02，单张成功退款0.01后迁移，仅本轮测试数据
steps：迁移包含部分退款订单并查看订单流水
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：消费退款及调账往来按原规则迁移，原开单人保留，本次人窗口新增
actual：Q总额0.02、退款0.01、净额0.01，公共账户迁移调账+0.01；目标消费-0.02和退款+0.01，挂帐-0.01正确。但目标退款流水的售后单号显示DD261114033701001001s，实际应为LYAS3619047264581386240。原退款流水及原账户迁移调账备注均为正确LYAS号。
result：有问题
businessIds：DD261114033701001001s
LYAS3619047264581386240
A3619050752183123969
RG3619050752183123975
MGf03ca0f96a921eaf2a80225dd850
verification：W11
R01
B11
W16
evidence：evidence/PM-BUG-008-迁移退款流水误用订单号.png
evidence/PM-BUG-008-原退款与迁移平账售后号正确.png
issueIds：PM-BUG-008
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：消费退款及调账往来按原规则迁移，原开单人保留，本次人窗口新增
actual：本轮新造C两票0.02退一张0.01，与D0.01合并迁移净0.02。目标消费-0.02/-0.01、退款+0.01，退款列为实际LYAS3639028826832437248，可点入原C订单售后单且退款成功；原旧DD格式数据仍保留历史，未据此误判新修复。
result：通过
businessIds：DD261127143715001001s
DD261127143912001001s
LYAS3639028826832437248
MG8b924edd8782e6edc3b54086e62a
RG3639031146206674952
A3639031146206674945
verification：W11
R01
B11
W16
evidence：
issueIds：PM-BUG-008
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-018-03
dependencies：PM-001
steps：迁移包含部分退款订单并查看订单流水
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：消费退款及调账往来按原规则迁移，原开单人保留，本次人窗口新增
verification：W11
R01
B11
W16
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16

### PM-018-04 检查迁移后列表和充值报表
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:12:15.160442+08:00
preconditions：本轮自建临客C/D与来源款；正常HTTP测试会话；现金记账，不连接真实收款网关。
steps：检查迁移后列表和充值报表
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不标已回款、退出候选、无窗口充值实收，调账归正确标签
actual：D迁移后退出待回款候选；按D单号查询已回款列表也为空。后台原消费-0.01保持未回款，原账户产生调账-往来+0.01，目标仅消费预付款-0.01。报表没有迁移充值或额外实收：公共临客充值0.03+收入0.01=0.04，总计300.04；增加的0.01来自C来源新入款而非迁移。
result：通过
businessIds：DD261114020931001001s
RG3618957345234370562
A3606358539707891713
DD261114020724001001s
RG3618954338757263362
RG3618955077491638274
RG3618955077491638276
verification：W11
R01
B11
W16
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：独立未结清临客订单，迁移前记录原伙伴账户、退款及消费；不可与回款共用已消耗样本。
dataIds：D-01
D-03
D-04
sampleKey：QA-PM-20261111-PM-018-04
dependencies：PM-001
steps：检查迁移后列表和充值报表
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-MOVE的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不标已回款、退出候选、无窗口充值实收，调账归正确标签
verification：W11
R01
B11
W16
protocolId：P-MOVE
checkpoints：W08—W11→R01→后台档案双账户→B11→W05候选→W16
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W11
path：../development-spec.html#W11
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 B11
path：../development-spec.html#B11
label：增补20号 W16
path：../development-spec.html#W16

## PM-019 记录列表、筛选及导出
模块：后台与记录
预期：窗口后台同一记录及单号，不新增回款处理类型，无回款来源列；结果和导出纳入对应记录，金额符号一致；按支付时间再完成时间倒序；无支付日迁移按完成时间；无无效展开；前后台金额关联一致，不入客户余额，不重复入账
当前：阻塞

### PM-019-01 核对本轮临客充值、待认领入款及转出
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：核对本轮临客充值、待认领入款及转出
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：窗口后台同一记录及单号，不新增回款处理类型，无回款来源列
actual：本轮待认领入款200/250/100、负转出-200/-250/-100及目标充值200/200，前后台同单号同金额；处理类型为充值/调账-认领款转出，不新增回款类型；列表无回款来源列。临客样本尚未建，本分支仅部分完成。
result：未跑
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：W12
W14
B05
B09
evidence：
issueIds：
runId：R01
executedAt：2026-11-14T02:24:10.788294+08:00
preconditions：本轮自建数据，HTTP正常测试会话
steps：核对本轮临客充值、待认领入款及转出
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：窗口后台同一记录及单号，不新增回款处理类型，无回款来源列
actual：窗口和后台账户充值列表均实际包含本轮临客充值、待认领原入款及负转出；C及E/F的相同记录号金额匹配。处理操作仍为充值/调账-认领款转出，无新回款处理类型，列表无回款来源列；后台临客类型显示临时客户、窗口显示公共临时客户，金额及记录同源。
result：通过
businessIds：RG3618955077491638276
RG3618954338757263362
RG3618955077491638274
RG3618961674561404932
RG3618961674561404930
verification：W12
W14
B05
B09
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-019-01
dependencies：PM-001
steps：核对本轮临客充值、待认领入款及转出
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：窗口后台同一记录及单号，不新增回款处理类型，无回款来源列
verification：W12
W14
B05
B09
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W14
path：../development-spec.html#W14
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09

### PM-019-02 W12筛待认领类型及转出操作后导出
范围：本期必测
结果：阻塞
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
steps：W12筛待认领类型及转出操作后导出
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：页面筛选及导出一致，正负符号及实际单号匹配；不新增来源列
actual：正常页面下载导入模板再次被浏览器权限审核拒绝：该QA来源下载未获授权；未取得模板文件，未导入，未验证导出文件。页面固定11列、第6行起、最多50条说明已读；日/月对账查询和部分页面筛选已实测，不能代替文件内容及导入验证。
result：阻塞
verification：W12
businessIds：
evidence：
issueIds：
blockerIds：ENV-003
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-019-02
dependencies：PM-001
steps：W12筛待认领类型及转出操作后导出
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：页面筛选及导出一致，正负符号及实际单号匹配；不新增来源列
verification：W12
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W14
path：../development-spec.html#W14
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09

### PM-019-02-S02 B05筛待认领类型及转出操作后导出
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
steps：B05筛待认领类型及转出操作后导出
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：页面筛选及导出一致，正负符号及实际单号匹配；不新增来源列
actual：正常页面下载导入模板再次被浏览器权限审核拒绝：该QA来源下载未获授权；未取得模板文件，未导入，未验证导出文件。页面固定11列、第6行起、最多50条说明已读；日/月对账查询和部分页面筛选已实测，不能代替文件内容及导入验证。
result：阻塞
verification：B05
businessIds：
evidence：
issueIds：
blockerIds：ENV-003
runId：R02
executedAt：2026-11-14T13:53:29.460624+08:00
preconditions：用户说明已修改QA站点下载权限；后台实际身份西瓜、HTTP QA来源已核对。
steps：按原页面正常重试模板下载或流水筛选导出
expected：页面筛选及导出一致，正负符号及实际单号匹配；不新增来源列
actual：用户修改下载权限后正常重试：模板点击等待15秒、页面链接下载等待20秒均未取得下载事件；B05待认领+调账+账户A3597284940257984512组合查询49条，页面转出RG3619664726348021762为-250.00、RG3619665516622004226为-0.01，导出等待15秒超时。正常打开页面提供的模板链接时Chrome明确返回net::ERR_BLOCKED_BY_CLIENT。本次未再收到旧下载授权拒绝，但客户端拦截具体原因未定，不能判下载权限或导出已恢复。没有取得新文件，没有导入或新增财务写入。
result：阻塞
businessIds：A3597284940257984512
RG3619664726348021762
RG3619665516622004226
verification：B05
evidence：
issueIds：
blockerIds：ENV-003
runId：R09
executedAt：2026-11-14T17:19:10.443059+08:00
preconditions：HTTP QA后台西瓜，复用本轮已确认业务单，不新增交易或配置变更
steps：B05筛待认领类型及转出操作后导出
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：页面筛选及导出一致，正负符号及实际单号匹配；不新增来源列
actual：后台账户A3597284940257984512＋调账-认领款转出查询49条，点击导出后工具download事件等待15秒超时，但下载目录实际17:13:55生成合作伙伴充值申请_1794647634707.xlsx。原文件共50行（表头+49明细）、16列；与页面三页20/20/9条的49个单号及15个共同字段逐条核对全部一致，无遗漏、重复。金额全负、合计-1550.60，原操作名/账号/支付日期/实际完成时刻/状态一致；000QA1114SCANZERO前导零保留；无新增回款来源列。已归档原文件，不把工具事件超时当作下载失败。
result：通过
businessIds：A3597284940257984512
verification：后台页面查询
实际xlsx文件内容
evidence：export-verification/R09-B05-待认领转出49条.xlsx
export-verification/R09-导出内容核验.json
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-019-02-S02
dependencies：PM-001
steps：B05筛待认领类型及转出操作后导出
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：页面筛选及导出一致，正负符号及实际单号匹配；不新增来源列
verification：B05
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W14
path：../development-spec.html#W14
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09

### PM-019-03 W12检查支付日、完成时间及列表布局
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:06:09.613199+08:00
preconditions：本轮T未回款、R已迁移，U/V未使用；仅只读查询和选择取消
steps：W12检查支付日、完成时间及列表布局
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按支付时间倒序再完成时间倒序；无支付日系统迁移按完成时刻；无无效展开／收起
actual：W12当天34条，页1系统迁移无支付日期按完成03:48:36至02:10:43排首；随后支付11-14 00:00记录按完成04:02:11降至02:14:55，页2续02:13:57至01:43:53。迁移以完成时刻作为排序键，普通记录按支付/完成两级；展开按钮确有补充查询字段，不是无效空展开。
result：通过
businessIds：DD261114035057001001s
DD261114034441001001s
RG3619071866242351106
RG3619072244199473154
verification：W12
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-019-03
dependencies：PM-001
steps：W12检查支付日、完成时间及列表布局
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按支付时间倒序再完成时间倒序；无支付日系统迁移按完成时刻；无无效展开／收起
verification：W12
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W14
path：../development-spec.html#W14
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09

### PM-019-03-S02 W14检查支付日、完成时间及列表布局
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:16:54.332416
preconditions：本轮U来源整笔0.01分配公司收入，用户备注留空；前后台同号回查
steps：W14检查支付日、完成时间及列表布局
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按支付时间倒序再完成时间倒序；无支付日系统迁移按完成时刻；无无效展开／收起
actual：W14查支付11-13至14，六条本轮收入先11-14的02:14:55/01:58:53/01:52:52/01:52:04，后11-13的02:55:47/02:49:34；完成较晚的昨日支付收入仍排今日之后。查询区全展示，没有无效展开。
result：通过
businessIds：RG3619071866242351106
RG3619085867835736066
RG3619085867835736068
verification：W14
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-019-03-S02
dependencies：PM-001
steps：W14检查支付日、完成时间及列表布局
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按支付时间倒序再完成时间倒序；无支付日系统迁移按完成时刻；无无效展开／收起
verification：W14
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W14
path：../development-spec.html#W14
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09

### PM-019-03-S03 B05检查支付日、完成时间及列表布局
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:16:54.332416
preconditions：本轮U来源整笔0.01分配公司收入，用户备注留空；前后台同号回查
steps：B05检查支付日、完成时间及列表布局
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按支付时间倒序再完成时间倒序；无支付日系统迁移按完成时刻；无无效展开／收起
actual：B05前两页检查：无支付日迁移按04:10:07至02:10:43排序；接11-14支付00:00按完成04:02:11递减；页1末02:32:48、页2首02:27:34衔接正确；页2最后11-13支付记录依完成02:55:47/02:49:34/02:37:49递减。展开确有补充查询，不属无效。
result：通过
businessIds：RG3619071866242351106
RG3619085867835736066
RG3619085867835736068
verification：B05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-019-03-S03
dependencies：PM-001
steps：B05检查支付日、完成时间及列表布局
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按支付时间倒序再完成时间倒序；无支付日系统迁移按完成时刻；无无效展开／收起
verification：B05
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W14
path：../development-spec.html#W14
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09

### PM-019-03-S04 B09检查支付日、完成时间及列表布局
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:16:54.332416
preconditions：本轮U来源整笔0.01分配公司收入，用户备注留空；前后台同号回查
steps：B09检查支付日、完成时间及列表布局
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按支付时间倒序再完成时间倒序；无支付日系统迁移按完成时刻；无无效展开／收起
actual：B09查询后本轮收入顺序：U支付11-14完成04:15:24居首；同支付日后续02:14:55/01:58:53/01:52:52/01:52:04，随后支付11-13完成02:55:47/02:49:34，后11-05/11-04；符合支付时间优先、同时间再完成。
result：通过
businessIds：RG3619071866242351106
RG3619085867835736066
RG3619085867835736068
verification：B09
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-019-03-S04
dependencies：PM-001
steps：B09检查支付日、完成时间及列表布局
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按支付时间倒序再完成时间倒序；无支付日系统迁移按完成时刻；无无效展开／收起
verification：B09
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W14
path：../development-spec.html#W14
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09

### PM-019-04 检查临客超额和来源分配公司收入
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:24:10.788294+08:00
preconditions：本轮自建数据，HTTP正常测试会话
steps：检查临客超额和来源分配公司收入
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：前后台金额关联一致，不入客户余额，不重复入账
actual：前后台同号查到临客A超额收入0.01（RG3618945164707119108）、E/F来源超额收入0.01（RG3618961674561404934），E/F详情关联source/out/customer正确。目标临客只充值0.03并逐单E0.02/F0.01，公司收入另记0.01；公共临客报表收入共0.02、充值0.06，来源未用0.01独立保留，不把收入加进客户余额。
result：通过
businessIds：RG3618945164707119108
RG3618961674561404934
RG3618961674561404932
verification：W12
W14
B05
B09
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-019-04
dependencies：PM-001
steps：检查临客超额和来源分配公司收入
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：前后台金额关联一致，不入客户余额，不重复入账
verification：W12
W14
B05
B09
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W12
path：../development-spec.html#W12
label：增补20号 W14
path：../development-spec.html#W14
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 B09
path：../development-spec.html#B09

## PM-020 详情互查及字段展示
模块：后台与记录
预期：定位正确原详情，来源转出目标收入关联齐全；关联在备注或处理区，不新增来源业务字段，不叠加—；备注资料整行边框连续；本次操作人一致；原订单及原入款人分别保留；原页面读取更新结果及追溯，原售票员不改
当前：通过

### PM-020-01 从W05订单号打开对应单号
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:50:08.812873+08:00
preconditions：本轮R/S各0.01临客订单，客户名称及负责人不同；未使用历史订单
steps：从W05订单号打开对应单号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原订单详情和本轮订单相符
actual：在W05点击R订单号链接，新开详情为DD261114034441001001s，客户R、管理员、原售票员YST、0.01及挂帐未回款均与列表对应。迁移后同详情刷新更新为个人预付RS并保留变更记录。
result：通过
businessIds：DD261114034441001001s
DD261114034513001001s
A3619058259785957377
RG3619058259785957383
MG9d908d1fbac53676d7df668658c1
verification：W05
R01
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-020-01
dependencies：PM-001
steps：从W05订单号打开对应单号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原订单详情和本轮订单相符
verification：W05
R01
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 B11
path：../development-spec.html#B11

### PM-020-01-S02 从W05回款号打开对应单号
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:12:15.160442+08:00
preconditions：本轮自建临客C/D与来源款；正常HTTP测试会话；现金记账，不连接真实收款网关。
steps：从W05回款号打开对应单号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：正确充值详情及结清关联
actual：从临客C已回款列表点击回款号RG3618955077491638276，详情为本笔+0.01并列出原来源、负转出及订单C结清0.01，单号与列表一致。
result：通过
businessIds：DD261114020724001001s
RG3618954338757263362
RG3618955077491638274
RG3618955077491638276
verification：W05
W13
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-020-01-S02
dependencies：PM-001
steps：从W05回款号打开对应单号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：正确充值详情及结清关联
verification：W05
W13
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 B11
path：../development-spec.html#B11

### PM-020-01-S03 从W04来源号打开对应单号
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:12:15.160442+08:00
preconditions：本轮自建临客C/D与来源款；正常HTTP测试会话；现金记账，不连接真实收款网关。
steps：从W04来源号打开对应单号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：正确原入款详情及使用状态
actual：从临客C充值详情点击原来源号，打开RG3618954338757263362，金额0.01，使用状态已使用，备注QA-PM1114-SOURCE-TEMP-C-001，转出及客户充值号正确。
result：通过
businessIds：DD261114020724001001s
RG3618954338757263362
RG3618955077491638274
RG3618955077491638276
verification：W04
W13
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-020-01-S03
dependencies：PM-001
steps：从W04来源号打开对应单号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：正确原入款详情及使用状态
verification：W04
W13
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 B11
path：../development-spec.html#B11

### PM-020-01-S04 从充值详情收入号打开对应单号
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:16:12.359409+08:00
preconditions：本轮新建E双票订单0.02、F单票订单0.01，客户名和负责人不同；新来源0.04；另有0.01不足来源。
steps：从充值详情收入号打开对应单号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：正确关联收入详情及金额
actual：从多单充值详情的其他收入号打开RG3618961674561404934，金额0.01、处理其他收入、账户号和账户类型—；关联原来源/转出/客户充值号均正确。
result：通过
businessIds：DD261114021242001001s
DD261114021305001001s
RG3618960695308861442
RG3618961674561404930
RG3618961674561404932
RG3618961674561404934
verification：W13
W15
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-020-01-S04
dependencies：PM-001
steps：从充值详情收入号打开对应单号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：正确关联收入详情及金额
verification：W13
W15
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 B11
path：../development-spec.html#B11

### PM-020-01-S05 从后台流水充值号打开对应单号
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:45:40+08:00
preconditions：用户授权指定QA站测试数据；先查本日待认领充值记录无数据、原余额0.03，正常UI操作
steps：从后台流水充值号打开对应单号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：正确后台充值详情及单号
actual：后台资金流水点击本轮充值号RG3618929685644984322打开正确后台充值详情；账户A3597284940257984512，充值200、现金、支付日2026-11-14 00:00:00，申请/完成时间01:43:53，申请人/售票员YST售票窗口、窗口YST团队售票窗口。
result：通过
businessIds：RG3618929685644984322
A3597284940257984512
verification：B11
B08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-020-01-S05
dependencies：PM-001
steps：从后台流水充值号打开对应单号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：正确后台充值详情及单号
verification：B11
B08
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 B11
path：../development-spec.html#B11

### PM-020-02 W13查看有备注及关联详情
范围：本期必测
结果：通过
原因：R10真实回归：窗口W13普通充值详情：售票窗口独立一行，备注独立一行，资料独立一行；备注QA-PM1114-ZERO-SALE-001、0.01扫码编号000QA1114SCANZERO保留。关联型详情待补。 关联型无正文备注也独立整行，来源/转出/其他收入三个单号分别独立显示；备注TD colspan=3。
runId：R01
executedAt：2026-11-14T01:49:39+08:00
preconditions：HTTP QA，YST售票窗口，本轮入款与长期目标已核验，正常UI操作
steps：W13查看有备注及关联详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：备注及资料各占整行边框连续；关联在原备注／处理区，无单列来源业务字段；有内容不叠加—
actual：本轮目标充值详情有备注及来源/转出关联；1920×797默认视口中备注与售票窗口共一行，只占半行，导致35字备注折行；方案20号W13要求备注独占整行。资料行独占整行，关联单号可追溯。
result：有问题
businessIds：RG3618929685644984322
RG3618933396496728066
RG3618933396496728068
verification：W13
evidence：evidence/PM-BUG-002-充值详情备注未整行.png
issueIds：PM-BUG-002
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：备注及资料各占整行边框连续；关联在原备注／处理区，无单列来源业务字段；有内容不叠加—
actual：窗口W13普通充值详情：售票窗口独立一行，备注独立一行，资料独立一行；备注QA-PM1114-ZERO-SALE-001、0.01扫码编号000QA1114SCANZERO保留。关联型详情待补。 关联型无正文备注也独立整行，来源/转出/其他收入三个单号分别独立显示；备注TD colspan=3。
result：通过
businessIds：
verification：W13
evidence：
issueIds：PM-BUG-002
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-020-02
dependencies：PM-001
steps：W13查看有备注及关联详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：备注及资料各占整行边框连续；关联在原备注／处理区，无单列来源业务字段；有内容不叠加—
verification：W13
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 B11
path：../development-spec.html#B11

### PM-020-02-S02 W13查看仅关联无备注正文详情
范围：本期必测
结果：通过
原因：R10真实回归：窗口W13普通充值详情：售票窗口独立一行，备注独立一行，资料独立一行；备注QA-PM1114-ZERO-SALE-001、0.01扫码编号000QA1114SCANZERO保留。关联型详情待补。 关联型无正文备注也独立整行，来源/转出/其他收入三个单号分别独立显示；备注TD colspan=3。
runId：R01
executedAt：2026-11-14T04:16:54.332416
preconditions：本轮U来源整笔0.01分配公司收入，用户备注留空；前后台同号回查
steps：W13查看仅关联无备注正文详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：备注及资料各占整行边框连续；关联在原备注／处理区，无单列来源业务字段；有内容不叠加—
actual：U负转出前台W13：无备注正文时备注单元格为空，与售票窗口同行，TH/TD各colspan1；来源U及收入关联另起两行，而非放进备注关联区。资料独行；单号链路正确。与W13备注整行及关联放备注区要求不符，归并PM-BUG-002。
result：有问题
businessIds：RG3619071866242351106
RG3619085867835736066
RG3619085867835736068
verification：W13
evidence：evidence/PM-BUG-002-仅关联充值详情备注未整行.png
issueIds：PM-BUG-002
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：备注及资料各占整行边框连续；关联在原备注／处理区，无单列来源业务字段；有内容不叠加—
actual：窗口W13普通充值详情：售票窗口独立一行，备注独立一行，资料独立一行；备注QA-PM1114-ZERO-SALE-001、0.01扫码编号000QA1114SCANZERO保留。关联型详情待补。 关联型无正文备注也独立整行，来源/转出/其他收入三个单号分别独立显示；备注TD colspan=3。
result：通过
businessIds：
verification：W13
evidence：
issueIds：PM-BUG-002
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-020-02-S02
dependencies：PM-001
steps：W13查看仅关联无备注正文详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：备注及资料各占整行边框连续；关联在原备注／处理区，无单列来源业务字段；有内容不叠加—
verification：W13
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 B11
path：../development-spec.html#B11

### PM-020-02-S03 W15查看有备注及关联详情
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:16:12.359409+08:00
preconditions：本轮新建E双票订单0.02、F单票订单0.01，客户名和负责人不同；新来源0.04；另有0.01不足来源。
steps：W15查看有备注及关联详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：备注及资料各占整行边框连续；关联在原备注／处理区，无单列来源业务字段；有内容不叠加—
actual：W15其他收入详情的备注及关联放在售票窗口右侧同一行，未按20号要求备注独占整行；同一布局问题PM-BUG-002。金额及关联正确。；本次复核判定：W15整行要求缺少正式规则依据，撤回该布局判定，见分支修订记录。
result：有问题
businessIds：DD261114021242001001s
DD261114021305001001s
RG3618960695308861442
RG3618961674561404930
RG3618961674561404932
RG3618961674561404934
verification：W15
evidence：evidence/PM-BUG-002-其他收入备注未整行.png
issueIds：
runId：R01
executedAt：2026-11-14T02:24:10.788294+08:00
preconditions：本轮自建数据，HTTP正常测试会话
steps：W15查看有备注及关联详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：W15正确关联本次来源及目标，正文及关联不叠加占位“—”，沿用原详情规则
actual：E/F其他收入详情正文QA-PM1114-EF多负责人核实来源超额，关联原来源RG3618960695308861442、转出RG3618961674561404930和客户充值RG3618961674561404932正确，正文与关联区没有叠加“—”。W15布局不再套用W13整行要求。
result：通过
businessIds：RG3618961674561404934
verification：W15
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-020-02-S03
dependencies：PM-001
steps：W15查看有备注及关联详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：W15正确关联本次来源及目标，正文及关联不叠加占位“—”，沿用原详情规则
verification：W15
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 B11
path：../development-spec.html#B11

### PM-020-02-S04 W15查看仅关联无备注正文详情
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:16:54.332416
preconditions：本轮U来源整笔0.01分配公司收入，用户备注留空；前后台同号回查
steps：W15查看仅关联无备注正文详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：复用原详情，正文及关联不叠加占位—；本次来源/目标关联可互查，不另设待认领款来源业务字段
actual：U全额收入单RG3619085867835736068未填备注：W15原备注区仅显示来源U及负转出链接，没有同时出现占位—，无单列待认领款来源业务字段；两链接分别开正确详情。W15按正式方案复用原详情，不额外要求整行。
result：通过
businessIds：RG3619071866242351106
RG3619085867835736066
RG3619085867835736068
verification：W15
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-020-02-S04
dependencies：PM-001
steps：W15查看仅关联无备注正文详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：复用原详情，正文及关联不叠加占位—；本次来源/目标关联可互查，不另设待认领款来源业务字段
verification：W15
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 B11
path：../development-spec.html#B11

### PM-020-02-S05 B08查看有备注及关联详情
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:50:47.992971+08:00
preconditions：本轮K两票0.02，独立QA标签正常退一票0.01；旧回款弹窗保留退款前0.02
steps：B08查看有备注及关联详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：备注及资料各占整行边框连续；关联在原备注／处理区，无单列来源业务字段；有内容不叠加—
actual：B08本轮K备注QA-PM1114-K-PARTIAL-CASH-PREV及其他收入关联号同在原备注处理区域；备注及充值相关资料各占整行，边框连续；有内容未叠加—，可点关联到B10。
result：通过
businessIds：DD261114024642001001s
LYAS3618996377808863232
RG3618997391509438466
RG3618997391509438468
verification：B08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-020-02-S05
dependencies：PM-001
steps：B08查看有备注及关联详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：备注及资料各占整行边框连续；关联在原备注／处理区，无单列来源业务字段；有内容不叠加—
verification：B08
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 B11
path：../development-spec.html#B11

### PM-020-02-S06 B08查看仅关联无备注正文详情
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:16:54.332416
preconditions：本轮U来源整笔0.01分配公司收入，用户备注留空；前后台同号回查
steps：B08查看仅关联无备注正文详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：备注及资料各占整行边框连续；关联在原备注／处理区，无单列来源业务字段；有内容不叠加—
actual：同笔U负转出后台B08备注TH1+TD colspan3占整行，内嵌来源U和收入链接，资料独占行；无手填正文时不叠加—。链接互查正确，没有独立待认领款来源字段。
result：通过
businessIds：RG3619071866242351106
RG3619085867835736066
RG3619085867835736068
verification：B08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-020-02-S06
dependencies：PM-001
steps：B08查看仅关联无备注正文详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：备注及资料各占整行边框连续；关联在原备注／处理区，无单列来源业务字段；有内容不叠加—
verification：B08
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 B11
path：../development-spec.html#B11

### PM-020-02-S07 B10查看有备注及关联详情
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：B10查看有备注及关联详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：备注及资料各占整行边框连续；关联在原备注／处理区，无单列来源业务字段；有内容不叠加—
actual：后台其他收入50详情，备注正文与目标充值号、来源号、转出号在备注说明整行，资料独占整行，无额外—；关联金额及单号正确。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：B10
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-020-02-S07
dependencies：PM-001
steps：B10查看有备注及关联详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：备注及资料各占整行边框连续；关联在原备注／处理区，无单列来源业务字段；有内容不叠加—
verification：B10
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 B11
path：../development-spec.html#B11

### PM-020-02-S08 B10查看仅关联无备注正文详情
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:16:54.332416
preconditions：本轮U来源整笔0.01分配公司收入，用户备注留空；前后台同号回查
steps：B10查看仅关联无备注正文详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：复用原详情，正文及关联不叠加占位—；本次来源/目标关联可互查，不另设待认领款来源业务字段
actual：U收入后台B10原备注区内只有负转出、来源U链接，不叠加—，资料单独一行；链接可打开正确对应单号。B10按正式方案复用原详情。
result：通过
businessIds：RG3619071866242351106
RG3619085867835736066
RG3619085867835736068
verification：B10
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-020-02-S08
dependencies：PM-001
steps：B10查看仅关联无备注正文详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：复用原详情，正文及关联不叠加占位—；本次来源/目标关联可互查，不另设待认领款来源业务字段
verification：B10
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 B11
path：../development-spec.html#B11

### PM-020-03 对照前后台申请人售票员窗口、来源及订单快照
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:17:16.321877+08:00
preconditions：复用R01真实单据及本轮正常操作结果，不追加故障或并发
steps：前后台逐项打开来源、目标充值及收入详情核对人员/资源/关联单号
R01回查AA原订单与迁移操作记录
expected：本次操作人一致；原订单及原入款人分别保留
actual：W13/W15/B08/B10同号串查来源V0.02、转出0.02、目标G0.01及公司收入0.01：申请人/售票员均YST售票窗口，窗口YST团队售票窗口；原来源负责人张悦轩、付款人QA-PM1114来源V与04:02:11时间保留，目标及收入负责人管理员、完成04:17:13，前后台三组关联单号一致。R01本轮AA迁移后仍原售票员YST及窗口来源，迁移操作人YST及05:14:41单独保存。此次样本原/现操作人同为YST；甲乙跨账号绑定差异专门分支PM-027-07/08仍未跑，不扩称已验证。
result：通过
businessIds：RG3619072244199473154
RG3619087757621346306
RG3619087757621346308
RG3619087757621346310
DD261114051304001001s
verification：W13
W15
B08
B10
R01
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-020-03
dependencies：PM-001
steps：对照前后台申请人售票员窗口、来源及订单快照
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：本次操作人一致；原订单及原入款人分别保留
verification：W13
W15
B08
B10
R01
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 B11
path：../development-spec.html#B11

### PM-020-04 查看完成回款及迁移的原订单、销售记录和退票页
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:58:26.951626+08:00
preconditions：本轮K部分退款后已回款，T已迁移至个人挂帐Q。
steps：打开K原订单详情核对已回款及原售票员
回看T已迁移原订单伙伴去向和变更记录
正常退票页分别查K/T，仅查看不提交
销售查询核对K双票退款状态与T原销售记录
expected：原页面读取更新结果及追溯，原售票员不改
actual：K原单0.02两张，已回款，原公共账户/客户名与YST售票员及YST团队来源保留；一票已退款0.01一票待确认0.01。退票页已退票禁选、剩余票可退，销售查询同两票未重复。T原单0.01仍YST售票员/团队来源，现伙伴个人挂帐Q/A3619050752183123969，变更记录公共临客→Q，操作人YST、04:10:07；销售记录原票号56GDWJJ5DL225及挂帐0.01不变，退票页按原单可查原票。无新增退款。
result：通过
businessIds：DD261114024642001001s
DD261114035057001001s
LYAS3618996377808863232
A3619050752183123969
verification：R01
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-020-04
dependencies：PM-001
steps：查看完成回款及迁移的原订单、销售记录和退票页
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原页面读取更新结果及追溯，原售票员不改
verification：R01
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 R01
path：../development-spec.html#R01
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 B11
path：../development-spec.html#B11

## PM-021 后台新增和导入对象限制
模块：后台与记录
预期：待认领不可选；原长期及公共临客流程可用；错误行说明拒绝原因，无待认领充值及流水；不新增模板列；沿原流水号唯一及导入校验，成功记录可查；整份拒绝，不产生记录或流水
当前：通过

### PM-021-01 后台新增充值搜索待认领
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:57:06.575583+08:00
preconditions：QA TEST本轮自建G伙伴，预付款余额从0.00开始；后台西瓜／窗口YST分别操作
steps：后台新增充值搜索待认领
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不可选且不能经正常保存路径向待认领入款
actual：后台新增充值搜索待认领，候选为空且充值账号仍-，正常路径无可选待认领对象；不使用接口或隐藏值注入。随后搜索普通G能正常选中。
result：通过
businessIds：
verification：B06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-021-01
dependencies：PM-001
steps：后台新增充值搜索待认领
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不可选且不能经正常保存路径向待认领入款
verification：B06
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B06
path：../development-spec.html#B06
label：增补20号 B07
path：../development-spec.html#B07
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 B11
path：../development-spec.html#B11

### PM-021-01-S02 后台新增普通长期充值
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:57:06.575583+08:00
preconditions：QA TEST本轮自建G伙伴，预付款余额从0.00开始；后台西瓜／窗口YST分别操作
steps：后台新增普通长期充值
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原普通流程可用，记录和余额匹配
actual：后台普通G现金充值0.01成功，RG3619002064433856513，原余额0.00→0.01；窗口重新打开G充值余额回查0.01。后台详情申请西瓜、售票员/窗口均-，未冒记窗口身份。
result：通过
businessIds：RG3619002064433856513
A3618964766937858049
verification：B06
B05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-021-01-S02
dependencies：PM-001
steps：后台新增普通长期充值
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：原普通流程可用，记录和余额匹配
verification：B06
B05
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B06
path：../development-spec.html#B06
label：增补20号 B07
path：../development-spec.html#B07
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 B11
path：../development-spec.html#B11

### PM-021-01-S03 后台新增公共临客回款
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:22:19.719134+08:00
preconditions：本轮M单DD261114031418001001s未回款0.01；窗口旧表单先打开，后台西瓜正常回款，不并发
steps：后台新增公共临客回款
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：沿原结清逻辑，可为窗口列表的后台来源样本
actual：后台选择公共临客、充值0.01并只选M订单（总0.01/退0），现金支付日14日成功，RG3619029638123896834；详情平账0.01关联M一单、售后0，实际申请西瓜、售票员/窗口-。窗口已回款M显示来源后台、操作西瓜，原售票员YST及原订单负责人管理员均保留。
result：通过
businessIds：DD261114031418001001s
RG3619029638123896834
verification：B06
B05
W05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-021-01-S03
dependencies：PM-001
steps：后台新增公共临客回款
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：沿原结清逻辑，可为窗口列表的后台来源样本
verification：B06
B05
W05
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B06
path：../development-spec.html#B06
label：增补20号 B07
path：../development-spec.html#B07
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 B11
path：../development-spec.html#B11

### PM-021-02 正常导入十一列模板中待认领对象
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
steps：正常导入十一列模板中待认领对象
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：错误行说明拒绝原因，无待认领充值及流水
actual：正常页面下载导入模板再次被浏览器权限审核拒绝：该QA来源下载未获授权；未取得模板文件，未导入，未验证导出文件。页面固定11列、第6行起、最多50条说明已读；日/月对账查询和部分页面筛选已实测，不能代替文件内容及导入验证。
result：阻塞
verification：B06
B07
businessIds：
evidence：
issueIds：
blockerIds：ENV-003
runId：R03
executedAt：2026-11-14T14:06:54.968587+08:00
preconditions：用户提供原始模板；QA企业G原余额0.05，待认领账户余额450.06；同一HTTP测试环境后台西瓜。
steps：正常导入十一列模板中待认领对象
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：错误行说明拒绝原因，无待认领充值及流水
actual：unclaimed.xlsx第6行待认领客户A3597284940257984512，唯一流水QA-PM1114-R03-IMPORT-UNCLAIM、0.01现金。返回共1条、0成功1失败，明确原因待认领客户不支持后台导入。账户余额仍450.06；该账户流水按时间倒序最新仍为13:37:44的原认领款转出RG3619665516622004226，无本次新增入款流水。
result：通过
businessIds：A3597284940257984512
verification：B06
B07
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-021-02
dependencies：PM-001
steps：正常导入十一列模板中待认领对象
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：错误行说明拒绝原因，无待认领充值及流水
verification：B06
B07
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B06
path：../development-spec.html#B06
label：增补20号 B07
path：../development-spec.html#B07
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 B11
path：../development-spec.html#B11

### PM-021-03 下载当前十一列模板并导入一条合法普通对象
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:20:20.065139+08:00
preconditions：后台充值申请批量导入弹窗
steps：查看模板说明并点击下载导入模板
expected：模板无新增列，唯一流水号合法，新记录可查
actual：页面说明固定11列、从第6行、最多50条且仅企业个人充值调账。点击下载未取得浏览器下载授权，尚未获得模板及导入，保持未跑；环境记录ENV-003。
result：未跑
businessIds：
verification：B07
B05
evidence：
issueIds：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
steps：下载当前十一列模板并导入一条合法普通对象
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：模板无新增列，唯一流水号合法，新记录可查
actual：正常页面下载导入模板再次被浏览器权限审核拒绝：该QA来源下载未获授权；未取得模板文件，未导入，未验证导出文件。页面固定11列、第6行起、最多50条说明已读；日/月对账查询和部分页面筛选已实测，不能代替文件内容及导入验证。
result：阻塞
verification：B07
B05
businessIds：
evidence：
issueIds：
blockerIds：ENV-003
runId：R02
executedAt：2026-11-14T13:53:29.460624+08:00
preconditions：用户说明已修改QA站点下载权限；后台实际身份西瓜、HTTP QA来源已核对。
steps：按原页面正常重试模板下载或流水筛选导出
expected：模板无新增列，唯一流水号合法，新记录可查
actual：用户修改下载权限后正常重试：模板点击等待15秒、页面链接下载等待20秒均未取得下载事件；B05待认领+调账+账户A3597284940257984512组合查询49条，页面转出RG3619664726348021762为-250.00、RG3619665516622004226为-0.01，导出等待15秒超时。正常打开页面提供的模板链接时Chrome明确返回net::ERR_BLOCKED_BY_CLIENT。本次未再收到旧下载授权拒绝，但客户端拦截具体原因未定，不能判下载权限或导出已恢复。没有取得新文件，没有导入或新增财务写入。
result：阻塞
businessIds：
verification：B07
B05
evidence：
issueIds：
blockerIds：ENV-003
runId：R03
executedAt：2026-11-14T14:06:54.968587+08:00
preconditions：用户提供原始模板；QA企业G原余额0.05，待认领账户余额450.06；同一HTTP测试环境后台西瓜。
steps：下载当前十一列模板并导入一条合法普通对象
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：模板无新增列，唯一流水号合法，新记录可查
actual：用户提供当前原始xlsx模板，实读11列、第6行数据及填写说明页；原文件未修改。valid-one.xlsx唯一线下流水QA-PM1114-R03-IMPORT-ONE，企业G预付款现金0.01。返回1成功0失败；生成RG3619688176869457921，详情付款人QA验收导入、负责人管理员、现金、支付日期及备注一致。账户余额0.05→0.06。资金流水按该账户及单号查询仅1条+0.01，完成时间2026-11-14 13:59:42。模板由用户手动取得，不代表自动下载恢复。
result：通过
businessIds：RG3619688176869457921
A3618964766937858049
verification：B07
B05
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-021-03
dependencies：PM-001
steps：下载当前十一列模板并导入一条合法普通对象
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：模板无新增列，唯一流水号合法，新记录可查
verification：B07
B05
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B06
path：../development-spec.html#B06
label：增补20号 B07
path：../development-spec.html#B07
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 B11
path：../development-spec.html#B11

### PM-021-03-S02 导入50条非空合法数据
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
steps：导入50条非空合法数据
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：边界允许，实际成功记录与导入行一一对应且无重复流水
actual：正常页面下载导入模板再次被浏览器权限审核拒绝：该QA来源下载未获授权；未取得模板文件，未导入，未验证导出文件。页面固定11列、第6行起、最多50条说明已读；日/月对账查询和部分页面筛选已实测，不能代替文件内容及导入验证。
result：阻塞
verification：B07
B05
B11
businessIds：
evidence：
issueIds：
blockerIds：ENV-003
runId：R03
executedAt：2026-11-14T14:06:54.968587+08:00
preconditions：用户提供原始模板；QA企业G原余额0.05，待认领账户余额450.06；同一HTTP测试环境后台西瓜。
steps：导入50条非空合法数据
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：边界允许，实际成功记录与导入行一一对应且无重复流水
actual：用户提供模板后，合法1条、重复及待认领拒绝样本已完成。随后选择51条reject-fiftyone.xlsx时，浏览器上传审批明确拒绝：该QA来源未获得上传授权，审批结果为用户拒绝。未上传成功、未点击同步导入，不绕过。50条及51条样本均已按原模板生成，但数量边界尚未实测，不能计通过。
result：阻塞
businessIds：
verification：B07
B05
B11
evidence：
issueIds：
blockerIds：ENV-008
runId：R05
executedAt：2026-11-14T14:27:07.428276+08:00
preconditions：企业G账户原余额0.06，充值10条、流水14条；用户辅助上传及提交50条唯一线下流水
steps：导入50条非空合法数据
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：边界允许，实际成功记录与导入行一一对应且无重复流水
actual：用户辅助上传并提交valid-fifty.xlsx。AI读取第6～55行线下流水QA-PM1114-R03-IMPORT-B50-01～50全部成功：50成功0失败。企业G充值记录10→60条，其中本次50个不同RG单号均为同账户预付款现金0.01，完成时间14:23:44～14:23:45；资金流水14→64条，本次50笔+0.01的单号集合与充值记录完全一致，无缺失、无额外或重复。账户余额0.06→0.56。详情抽查B50-37/38/39/50与备注对应，付款人、负责人、方式正确。完整导入结果、50笔充值/流水对应数据见import-samples/fifty-verification.json。
result：通过
verification：B07
B05
B11
businessIds：RG3619712967420690439
RG3619712967420690436
RG3619712967420690433
RG3619712950240821291
RG3619712950240821288
RG3619712950240821285
RG3619712950240821282
RG3619712950240821279
RG3619712950240821276
RG3619712950240821273
RG3619712950240821270
RG3619712950240821267
RG3619712950240821264
RG3619712950240821261
RG3619712950240821258
RG3619712950240821255
RG3619712950240821252
RG3619712950240821249
RG3619712933060952101
RG3619712933060952098
RG3619712933060952095
RG3619712933060952092
RG3619712933060952089
RG3619712933060952086
RG3619712933060952083
RG3619712933060952080
RG3619712933060952077
RG3619712933060952074
RG3619712933060952071
RG3619712933060952068
RG3619712933060952065
RG3619712915881082903
RG3619712915881082900
RG3619712915881082897
RG3619712915881082894
RG3619712915881082891
RG3619712915881082888
RG3619712915881082885
RG3619712915881082882
RG3619712898701213727
RG3619712898701213724
RG3619712898701213721
RG3619712898701213718
RG3619712898701213715
RG3619712898701213712
RG3619712898701213709
RG3619712898701213706
RG3619712898701213703
RG3619712898701213700
RG3619712898701213697
A3618964766937858049
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-021-03-S02
dependencies：PM-001
steps：导入50条非空合法数据
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：边界允许，实际成功记录与导入行一一对应且无重复流水
verification：B07
B05
B11
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B06
path：../development-spec.html#B06
label：增补20号 B07
path：../development-spec.html#B07
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 B11
path：../development-spec.html#B11

### PM-021-03-S03 导入本轮已存在流水号
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
steps：导入本轮已存在流水号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：沿原唯一性规则提示，不重复入账
actual：正常页面下载导入模板再次被浏览器权限审核拒绝：该QA来源下载未获授权；未取得模板文件，未导入，未验证导出文件。页面固定11列、第6行起、最多50条说明已读；日/月对账查询和部分页面筛选已实测，不能代替文件内容及导入验证。
result：阻塞
verification：B07
B05
B11
businessIds：
evidence：
issueIds：
blockerIds：ENV-003
runId：R03
executedAt：2026-11-14T14:06:54.968587+08:00
preconditions：用户提供原始模板；QA企业G原余额0.05，待认领账户余额450.06；同一HTTP测试环境后台西瓜。
steps：导入本轮已存在流水号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：沿原唯一性规则提示，不重复入账
actual：duplicate.xlsx重复提交与已成功样本完全相同线下流水QA-PM1114-R03-IMPORT-ONE，返回共1条、0成功1失败，原因线下流水号已使用。随后账户刷新仍0.06，原充值单RG3619688176869457921对应资金流水仅1条+0.01，无重复入账。
result：通过
businessIds：RG3619688176869457921
A3618964766937858049
verification：B07
B05
B11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-021-03-S03
dependencies：PM-001
steps：导入本轮已存在流水号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：沿原唯一性规则提示，不重复入账
verification：B07
B05
B11
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B06
path：../development-spec.html#B06
label：增补20号 B07
path：../development-spec.html#B07
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 B11
path：../development-spec.html#B11

### PM-021-04 导入51条非空数据
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
steps：导入51条非空数据
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：整份拒绝，不产生记录或流水
actual：正常页面下载导入模板再次被浏览器权限审核拒绝：该QA来源下载未获授权；未取得模板文件，未导入，未验证导出文件。页面固定11列、第6行起、最多50条说明已读；日/月对账查询和部分页面筛选已实测，不能代替文件内容及导入验证。
result：阻塞
verification：B06
B07
businessIds：
evidence：
issueIds：
blockerIds：ENV-003
runId：R03
executedAt：2026-11-14T14:06:54.968587+08:00
preconditions：用户提供原始模板；QA企业G原余额0.05，待认领账户余额450.06；同一HTTP测试环境后台西瓜。
steps：导入51条非空数据
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：整份拒绝，不产生记录或流水
actual：用户提供模板后，合法1条、重复及待认领拒绝样本已完成。随后选择51条reject-fiftyone.xlsx时，浏览器上传审批明确拒绝：该QA来源未获得上传授权，审批结果为用户拒绝。未上传成功、未点击同步导入，不绕过。50条及51条样本均已按原模板生成，但数量边界尚未实测，不能计通过。
result：阻塞
businessIds：
verification：B06
B07
evidence：
issueIds：
blockerIds：ENV-008
runId：R04
executedAt：2026-11-14T14:22:57.672572+08:00
preconditions：用户辅助完成上传和提交，原企业G余额0.06
steps：导入51条非空数据
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：整份拒绝，不产生记录或流水
actual：用户辅助上传并提交reject-fiftyone.xlsx；AI读取结果“单次最多导入50条，请调整文件后重新上传”，整份拒绝。随后刷新企业G余额仍0.06，资金流水仍14条、最新仍为原RG3619688176869457921；充值记录10条，无本次51条新增记录。
result：通过
verification：B06
B07
businessIds：A3618964766937858049
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：前序本轮交易已取得真实单号；详情、导出可复用这些单号；导入另备唯一流水号。
dataIds：D-01
D-02
D-03
D-06
sampleKey：QA-PM-20261111-PM-021-04
dependencies：PM-001
steps：导入51条非空数据
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：整份拒绝，不产生记录或流水
verification：B06
B07
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B06
path：../development-spec.html#B06
label：增补20号 B07
path：../development-spec.html#B07
label：增补20号 B05
path：../development-spec.html#B05
label：增补20号 W05
path：../development-spec.html#W05
label：增补20号 B11
path：../development-spec.html#B11

## PM-022 资金流水归类与时间
模块：账表联动
预期：分别+S、-S、+C或D及公司收入，六标签不变，转出完整名称归调账；流水发生时间当前完成时刻，倒序而非支付日；消费历史保留不重复；迁移调账往来归调账
当前：通过

### PM-022-01 核对入款、源转出、目标充值和收入
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：核对入款、源转出、目标充值和收入
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：分别+S、-S、+C或D及公司收入，六标签不变，转出完整名称归调账
actual：本轮三组正入款、负转出、目标充值及公司收入全部核对；源后台流水+200/+250/+100及-200/-250/-100，目标+200/+200，收入后台50/100；六标签仍全部/充值/消费/退款/其他收入/调账，转出名称完整。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：B11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
dataIds：D-01
D-02
D-03
D-07
sampleKey：QA-PM-20261111-PM-022-01
dependencies：PM-001
PM-007
steps：核对入款、源转出、目标充值和收入
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：分别+S、-S、+C或D及公司收入，六标签不变，转出完整名称归调账
verification：B11
protocolId：P-REPORT
checkpoints：W16分组明细/小计/总计→B12日月及导出→本轮原单集合
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B11
path：../development-spec.html#B11

### PM-022-02 补录昨日支付并今日完成
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：补录昨日支付并今日完成
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：流水发生时间当前完成时刻，倒序而非支付日
actual：250原入款支付日13日、完成日14日；后台流水发生时间14日01:49:59，按实际完成时刻排在随后转出之前，未使用支付日00:00:00冒充发生时刻。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：B11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
dataIds：D-01
D-02
D-03
D-07
sampleKey：QA-PM-20261111-PM-022-02
dependencies：PM-001
PM-007
steps：补录昨日支付并今日完成
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：流水发生时间当前完成时刻，倒序而非支付日
verification：B11
protocolId：P-REPORT
checkpoints：W16分组明细/小计/总计→B12日月及导出→本轮原单集合
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B11
path：../development-spec.html#B11

### PM-022-03 查看回款前后原消费与迁移流水
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:12:15.160442+08:00
preconditions：本轮自建临客C/D与来源款；正常HTTP测试会话；现金记账，不连接真实收款网关。
steps：查看回款前后原消费与迁移流水
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：消费历史保留不重复；迁移调账往来归调账
actual：临客C原消费-0.01保留一笔并标已回款；D原消费保留一笔未回款，原账户调账-往来+0.01，目标消费-0.01。目标流水备注有转移单号MGe85467108e5e4072016897a5297b；没有重复原消费。
result：通过
businessIds：DD261114020931001001s
RG3618957345234370562
A3606358539707891713
DD261114020724001001s
RG3618954338757263362
RG3618955077491638274
RG3618955077491638276
verification：B11
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
dataIds：D-01
D-02
D-03
D-07
sampleKey：QA-PM-20261111-PM-022-03
dependencies：PM-001
PM-007
steps：查看回款前后原消费与迁移流水
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：消费历史保留不重复；迁移调账往来归调账
verification：B11
protocolId：P-REPORT
checkpoints：W16分组明细/小计/总计→B12日月及导出→本轮原单集合
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 B11
path：../development-spec.html#B11

## PM-023 分组、小计、动态支付列
模块：账表联动
预期：小计按组、总计只加原明细一次；使用日C或D+I−S=0，原日+S；目标不含公司收入，转出原列负数
当前：有问题

### PM-023-01 查看同伙伴不同单一负责人分组报表
范围：本期必测
结果：有问题
原因：
runId：R01
executedAt：2026-11-14T02:04:05+08:00
preconditions：本轮临客订单A/B，非实名测试票97274各0.01；正常UI下单出票并选择不打印，无真实游客信息
steps：查看同伙伴不同单一负责人分组报表
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按合作类型＋伙伴名称＋负责人快照分组；相异负责人或组合不混组
actual：同一公共临时客户，本轮A负责人管理员、B负责人张悦轩，各自订单已回款列表快照仍正确，各充值0.01；报表却把两笔客户充值合并成负责人空白的一行0.02，并与公司收入0.01共空白组小计0.03，未按两位负责人分别分组。金额总计正确不抵消维度错误。
result：有问题
businessIds：DD261114015654001001s
DD261114020123001001s
RG3618945164707119106
RG3618945164707119108
RG3618948239903703042
verification：W16
evidence：evidence/PM-BUG-003-临客负责人报表空白合并.png
evidence/PM-BUG-003-订单两位负责人快照.png
issueIds：PM-BUG-003
执行设计（非执行结果）：
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
dataIds：D-01
D-02
D-03
D-07
sampleKey：QA-PM-20261111-PM-023-01
dependencies：PM-001
PM-007
steps：查看同伙伴不同单一负责人分组报表
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按合作类型＋伙伴名称＋负责人快照分组；相异负责人或组合不混组
verification：W16
protocolId：P-REPORT
checkpoints：W16分组明细/小计/总计→B12日月及导出→本轮原单集合
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W16
path：../development-spec.html#W16

### PM-023-01-S02 查看同伙伴不同多负责人组合分组报表
范围：本期必测
结果：有问题
原因：R10真实回归：新订单A管理员0.01、B张悦轩0.01，合并回款0.02+公司收入0.01，现金0.04找零0.01。W13/B08目标充值负责人仅张悦轩；W16挂帐充值0.02也仅张悦轩，而正式规则要求保留管理员＋张悦轩多负责人组合。公司收入0.01独立，公司收入及收款总额0.03正确。
runId：R01
executedAt：2026-11-14T05:09:07.567630+08:00
preconditions：本轮X管理员、Y张悦轩各0.01；Y与长期G同名；Z现金来源0.02负责人test666
steps：确认不一致客户/负责人提示，人工确认同一客户并回款
回查目标充值关联两单、来源及唯一负数
后台同号列表/详情与W16按14日对照
expected：按合作类型＋伙伴名称＋负责人快照分组；相异负责人或组合不混组
actual：实际创建管理员X与张悦轩Y两个临客订单各0.01，确认同一客户后，以test666来源款0.02结清。后台目标充值负责人为空，W16新增0.02仍并入公共临客空负责人组，未形成管理员+张悦轩组合。第一组合已不满足，不宣称测过其他新组合。
result：有问题
businessIds：DD261114045301002001s
DD261114050251001001s
RG3619135174060294146
RG3619136531269959682
RG3619136531269959684
verification：W16
evidence：evidence/PM-BUG-003-多负责人回款仍并入空负责人组.png
issueIds：PM-BUG-003
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：按合作类型＋伙伴名称＋负责人快照分组；相异负责人或组合不混组
actual：新订单A管理员0.01、B张悦轩0.01，合并回款0.02+公司收入0.01，现金0.04找零0.01。W13/B08目标充值负责人仅张悦轩；W16挂帐充值0.02也仅张悦轩，而正式规则要求保留管理员＋张悦轩多负责人组合。公司收入0.01独立，公司收入及收款总额0.03正确。
result：有问题
businessIds：DD261127143417001001s
DD261127143606001001s
RG3639024703755730946
RG3639024703755730948
verification：W16
evidence：evidence/PM-BUG-003-R10-双负责人回款仍归首人.jpg
issueIds：PM-BUG-003
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
dataIds：D-01
D-02
D-03
D-07
sampleKey：QA-PM-20261111-PM-023-01-S02
dependencies：PM-001
PM-007
steps：查看同伙伴不同多负责人组合分组报表
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按合作类型＋伙伴名称＋负责人快照分组；相异负责人或组合不混组
verification：W16
protocolId：P-REPORT
checkpoints：W16分组明细/小计/总计→B12日月及导出→本轮原单集合
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W16
path：../development-spec.html#W16

### PM-023-01-S03 查看公共临客与长期同名客户分组报表
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:09:07.567630+08:00
preconditions：本轮X管理员、Y张悦轩各0.01；Y与长期G同名；Z现金来源0.02负责人test666
steps：确认不一致客户/负责人提示，人工确认同一客户并回款
回查目标充值关联两单、来源及唯一负数
后台同号列表/详情与W16按14日对照
expected：按合作类型＋伙伴名称＋负责人快照分组；相异负责人或组合不混组
actual：临客Y客户名与长期企业G完全相同QA-PM1114迁移企业G。回款后公共临客充值0.11→0.13，长期企业G仍充值0.06、其他收入0.02、小计0.08；不同类型未混组。
result：通过
businessIds：DD261114045301002001s
DD261114050251001001s
RG3619135174060294146
RG3619136531269959682
RG3619136531269959684
verification：W16
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
dataIds：D-01
D-02
D-03
D-07
sampleKey：QA-PM-20261111-PM-023-01-S03
dependencies：PM-001
PM-007
steps：查看公共临客与长期同名客户分组报表
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按合作类型＋伙伴名称＋负责人快照分组；相异负责人或组合不混组
verification：W16
protocolId：P-REPORT
checkpoints：W16分组明细/小计/总计→B12日月及导出→本轮原单集合
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W16
path：../development-spec.html#W16

### PM-023-02 仅一条明细分组核对小计及合并列
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：仅一条明细分组核对小计及合并列
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：均有合作伙伴小计，文字不追加名称负责人；按处理操作＋账户类型汇总，连续明细前三列合并
actual：13日仅管理员待认领充值250一条明细，仍显示独立合作伙伴小计250，文字不追加名称/负责人；类型、名称、负责人位于分组列。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：W16
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
dataIds：D-01
D-02
D-03
D-07
sampleKey：QA-PM-20261111-PM-023-02
dependencies：PM-001
PM-007
steps：仅一条明细分组核对小计及合并列
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：均有合作伙伴小计，文字不追加名称负责人；按处理操作＋账户类型汇总，连续明细前三列合并
verification：W16
protocolId：P-REPORT
checkpoints：W16分组明细/小计/总计→B12日月及导出→本轮原单集合
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W16
path：../development-spec.html#W16

### PM-023-02-S02 多条明细分组核对小计及合并列
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：多条明细分组核对小计及合并列
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：均有合作伙伴小计，文字不追加名称负责人；按处理操作＋账户类型汇总，连续明细前三列合并
actual：13—14日目标组按操作/账户分别收入150和预付款充值400，小计550；待认领管理员组-250+250小计0，无负责人组-300+300小计0；前三列在同组连续明细合并显示。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：W16
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
dataIds：D-01
D-02
D-03
D-07
sampleKey：QA-PM-20261111-PM-023-02-S02
dependencies：PM-001
PM-007
steps：多条明细分组核对小计及合并列
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：均有合作伙伴小计，文字不追加名称负责人；按处理操作＋账户类型汇总，连续明细前三列合并
verification：W16
protocolId：P-REPORT
checkpoints：W16分组明细/小计/总计→B12日月及导出→本轮原单集合
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W16
path：../development-spec.html#W16

### PM-023-03 核算分组小计及总计
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T01:55:42+08:00
preconditions：本轮独立250跨日来源与100全空来源；正常UI顺序操作
steps：核算分组小计及总计
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：金额支付列正确；总计仅加原明细一次不加小计
actual：今日目标550、待认领管理员-250、待认领空负责人0，合计300；昨日原入款250合计250；两日目标550、源0+0，总计550。小计未再次累加，现金列与金额一致，其余方式0.00。
result：通过
businessIds：RG3618935973477105666
RG3618936695031611394
RG3618938138140622850
RG3618938138140622852
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：W16
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
dataIds：D-01
D-02
D-03
D-07
sampleKey：QA-PM-20261111-PM-023-03
dependencies：PM-001
PM-007
steps：核算分组小计及总计
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：金额支付列正确；总计仅加原明细一次不加小计
verification：W16
protocolId：P-REPORT
checkpoints：W16分组明细/小计/总计→B12日月及导出→本轮原单集合
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W16
path：../development-spec.html#W16

### PM-023-04 本轮使用两柜台及两POS编号、现金支付宝微信
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:10:55.970793+08:00
preconditions：复用本轮两POS及柜台2原始单，本批另建支付宝、微信、柜台1三笔各0.01，均独立未使用
steps：提交三笔测试入款并逐笔回查窗口列表与详情、后台列表
刷新W16按14日对照动态列、每组明细、小计与总计
expected：现金支付宝微信各一列、扫码柜台银行卡POS动态拆列，无发生额0.00
actual：三笔入款前后台均成功未使用，金额各0.01；柜台1名称散客1号柜台码/CCB-SK-011正确；余额0.04→0.05→0.06→0.07。W16现金/支付宝/微信单列，两POS000QA1103POS01及POS-SK-02、两柜台CCB-SK-011及CCB-SK-012121212121212（另含本轮前导零柜台快照）动态分列；无发生格0.00，支付宝/微信/柜台1各新增0.01，总计300.23→300.26，列总和300.12+0.01+0.01+0.04+0.02+0.01+0.04+0.01=300.26。
result：通过
businessIds：RG3619141530611892226
RG3619141771130060802
RG3619141977288491010
RG3619072244199473154
RG3619071866242351106
RG3619044034854273026
verification：W16
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
dataIds：D-01
D-02
D-03
D-07
sampleKey：QA-PM-20261111-PM-023-04
dependencies：PM-001
PM-007
steps：本轮使用两柜台及两POS编号、现金支付宝微信
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：现金支付宝微信各一列、扫码柜台银行卡POS动态拆列，无发生额0.00
verification：W16
protocolId：P-REPORT
checkpoints：W16分组明细/小计/总计→B12日月及导出→本轮原单集合
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W16
path：../development-spec.html#W16

### PM-023-05 来源负责人A、使用目标负责人B
范围：本期必测
结果：有问题
原因：
runId：R01
executedAt：2026-11-14T04:20:55.041634
preconditions：本轮V来源张悦轩0.02；目标G管理员；客户0.01/公司收入0.01
steps：来源负责人A、使用目标负责人B
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：正数按目标，负数保留A且一来源一负数；临客多负责人快照保留，收入不分摊个人
actual：长期目标分支已实测：来源负数-0.02保留张悦轩，与源正数0.02抵消；G客户充值0.01和公司收入0.01归管理员组，POS-SK-02列正确；全表总计300.17。临客多负责人快照分支尚未完成，本综合分支仍未跑，不以长期目标结果替代。
result：未跑
businessIds：RG3619072244199473154
RG3619087757621346306
RG3619087757621346308
RG3619087757621346310
verification：W16
evidence：
issueIds：
runId：R01
executedAt：2026-11-14T05:09:07.567630+08:00
preconditions：本轮X管理员、Y张悦轩各0.01；Y与长期G同名；Z现金来源0.02负责人test666
steps：确认不一致客户/负责人提示，人工确认同一客户并回款
回查目标充值关联两单、来源及唯一负数
后台同号列表/详情与W16按14日对照
expected：正数按目标，负数保留A且一来源一负数；临客多负责人快照保留，收入不分摊个人
actual：此前长期目标分支来源张悦轩、目标管理员归属正确；本批test666来源0.02转出-0.02仍保留test666，公共临客目标两单管理员/张悦轩组合却在后台及W16负责人为空。总计300.23，未发现本批总额差错。
result：有问题
businessIds：DD261114045301002001s
DD261114050251001001s
RG3619135174060294146
RG3619136531269959682
RG3619136531269959684
verification：W16
evidence：evidence/PM-BUG-003-多负责人回款仍并入空负责人组.png
issueIds：PM-BUG-003
执行设计（非执行结果）：
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
dataIds：D-01
D-02
D-03
D-07
sampleKey：QA-PM-20261111-PM-023-05
dependencies：PM-001
PM-007
steps：来源负责人A、使用目标负责人B
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：正数按目标，负数保留A且一来源一负数；临客多负责人快照保留，收入不分摊个人
verification：W16
protocolId：P-REPORT
checkpoints：W16分组明细/小计/总计→B12日月及导出→本轮原单集合
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W16
path：../development-spec.html#W16

## PM-024 跨日、跨操作人及后台对帐单
模块：账表联动
预期：昨日甲+250，今日乙+200+50-250=0，按填支付日和实际人窗口统计；200+50-250=0，负转出仍在原方式编号列，实收原日只一次；仅消费列改认领转出；列数查询导出不变，原日到款、使用日转出绝对值且不重复底部调账；目标仅计客户充值不含公司收入；窗口排除迁移人工调账退款自动调整
当前：通过

### PM-024-01 甲昨日入250、乙今日结临客200及收入50
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:42:37.732Z
preconditions：顺序正常登录第二测试角色，分别核对当前账号、窗口及不同支付绑定；结束恢复YST。
steps：甲昨日入250、乙今日结临客200及收入50
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：昨日甲+250，今日乙+200+50-250=0，按填支付日和实际人窗口统计
actual：甲11-13入款250 RG3619661341913792514，乙11-14用该来源结清订单DD261114133557001001s 200并计其他收入50；转出RG3619664726348021762 -250，目标1764 +200，收入1766 +50。乙当日报表合计0（另有长期0.01转出/入相抵）；甲昨日扫码列250保留，甲昨日总额500.06含此前现金250等，未把历史合计冒作本笔。当前人/窗口分别为甲YST、乙hjk001。公共负责人空白另归BUG003。
result：通过
businessIds：RG3619661341913792514
DD261114133557001001s
RG3619664726348021762
RG3619664726348021764
RG3619664726348021766
verification：W16
B12
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
dataIds：D-01
D-02
D-03
D-07
sampleKey：QA-PM-20261111-PM-024-01
dependencies：PM-001
PM-007
steps：甲昨日入250、乙今日结临客200及收入50
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：昨日甲+250，今日乙+200+50-250=0，按填支付日和实际人窗口统计
verification：W16
B12
protocolId：P-REPORT
checkpoints：W16分组明细/小计/总计→B12日月及导出→本轮原单集合
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

### PM-024-02 查看长期充值C=200、I=50的当日来源使用报表
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:54:16.891839+08:00
preconditions：使用本轮订单及来源。缺绑定仅临时清本轮YST团队设备扫码绑定，扫码归属设备；不改其他设备或账号。
steps：按对应分支记录操作
核对提示、金额和适用回查位置
恢复设备原两扫码柜台默认2及全局跟收银账号
expected：200+50-250=0，负转出仍在原方式编号列，实收原日只一次
actual：W16今日统计：QA2-W10目标充值400=前笔200+本拆分C200，其他收入150=前笔全收入100+本拆分I50；原来源250转出仍归现金列管理员分组（同组含其他0.01扫码转出及充值，对冲后现金-250），200+50-250=0。11月13日报原来源管理员现金250，仅一笔；13日总250.06含其他本轮0.06，14日总300.21与新增外部实收一致，未因认领重复增加250。B12目标今日到账400、消费0.01、余额399.98，公司收入150未并入伙伴到账。
result：通过
businessIds：RG3618935973477105666
RG3618938945594474498
RG3618938945594474500
RG3618938945594474502
verification：W16
B12
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
dataIds：D-01
D-02
D-03
D-07
sampleKey：QA-PM-20261111-PM-024-02
dependencies：PM-001
PM-007
steps：查看长期充值C=200、I=50的当日来源使用报表
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：200+50-250=0，负转出仍在原方式编号列，实收原日只一次
verification：W16
B12
protocolId：P-REPORT
checkpoints：W16分组明细/小计/总计→B12日月及导出→本轮原单集合
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

### PM-024-03 后台对帐单按日查询待认领并导出
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:32:50.051637
preconditions：本轮来源分配已完成，所有共享支付配置和资源已恢复
steps：后台报表中心原合作伙伴对帐单按日及按月查询待认领和本轮G
与本轮W16金额、源转出和G客户充值及公司收入单据比对
expected：只把消费列改为认领转出；原支付日到款、使用日转出取绝对值，不再计底部调账；列数查询导出保持
actual：日查询已执行：2026-11-14待认领当日认领转出550.12、到账300.10，底部调账0.00/0.00，余额0.03；保留原列数、只替换认领转出列。导出因已记录ENV-003下载权限未验，不标全通过。
result：未跑
businessIds：A3597284940257984512
A3618964766937858049
RG3619087757621346308
RG3619087757621346310
RG3619085867835736068
verification：B12
evidence：
issueIds：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
steps：后台对帐单按日查询待认领并导出
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只把消费列改为认领转出；原支付日到款、使用日转出取绝对值，不再计底部调账；列数查询导出保持
actual：正常页面下载导入模板再次被浏览器权限审核拒绝：该QA来源下载未获授权；未取得模板文件，未导入，未验证导出文件。页面固定11列、第6行起、最多50条说明已读；日/月对账查询和部分页面筛选已实测，不能代替文件内容及导入验证。
result：阻塞
verification：B12
businessIds：
evidence：
issueIds：
blockerIds：ENV-003
runId：R09
executedAt：2026-11-14T17:19:10.443059+08:00
preconditions：HTTP QA后台西瓜，复用本轮已确认业务单，不新增交易或配置变更
steps：后台对帐单按日查询待认领并导出
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只把消费列改为认领转出；原支付日到款、使用日转出取绝对值，不再计底部调账；列数查询导出保持
actual：按日待认领2026-11-14页面与实际xlsx一致：认领转出800.15、到账500.16、当前预付款450.06、挂帐—；底部调账0/0无重复认领转出。文件标题、日期、表头、制单人西瓜与打印时间17:14均一致。点击下载后工具事件超时，但17:14:43原文件实际保存，实读文件完成验证。
result：通过
businessIds：A3597284940257984512
verification：后台页面查询
实际xlsx文件内容
evidence：export-verification/R09-B12-待认领按日.xlsx
export-verification/R09-导出内容核验.json
issueIds：
执行设计（非执行结果）：
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
dataIds：D-01
D-02
D-03
D-07
sampleKey：QA-PM-20261111-PM-024-03
dependencies：PM-001
PM-007
steps：后台对帐单按日查询待认领并导出
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只把消费列改为认领转出；原支付日到款、使用日转出取绝对值，不再计底部调账；列数查询导出保持
verification：B12
protocolId：P-REPORT
checkpoints：W16分组明细/小计/总计→B12日月及导出→本轮原单集合
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

### PM-024-03-S02 后台对帐单按月查询待认领并导出
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:32:50.051642
preconditions：本轮来源分配已完成，所有共享支付配置和资源已恢复
steps：后台报表中心原合作伙伴对帐单按日及按月查询待认领和本轮G
与本轮W16金额、源转出和G客户充值及公司收入单据比对
expected：只把消费列改为认领转出；原支付日到款、使用日转出取绝对值，不再计底部调账；列数查询导出保持
actual：月查询已执行：2026-11待认领认领转出1050.46、到款1050.49、余额0.03、调账0.00/0.00。月含其他历史测试单，未据其总额推定本轮全部明细正确；导出仍受ENV-003限制，不标通过。
result：未跑
businessIds：A3597284940257984512
A3618964766937858049
RG3619087757621346308
RG3619087757621346310
RG3619085867835736068
verification：B12
evidence：
issueIds：
runId：R01
executedAt：2026-11-14T05:44:48.367Z
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
steps：后台对帐单按月查询待认领并导出
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只把消费列改为认领转出；原支付日到款、使用日转出取绝对值，不再计底部调账；列数查询导出保持
actual：正常页面下载导入模板再次被浏览器权限审核拒绝：该QA来源下载未获授权；未取得模板文件，未导入，未验证导出文件。页面固定11列、第6行起、最多50条说明已读；日/月对账查询和部分页面筛选已实测，不能代替文件内容及导入验证。
result：阻塞
verification：B12
businessIds：
evidence：
issueIds：
blockerIds：ENV-003
runId：R09
executedAt：2026-11-14T17:19:10.443059+08:00
preconditions：HTTP QA后台西瓜，复用本轮已确认业务单，不新增交易或配置变更
steps：后台对帐单按月查询待认领并导出
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只把消费列改为认领转出；原支付日到款、使用日转出取绝对值，不再计底部调账；列数查询导出保持
actual：按月待认领2026-11页面与实际xlsx一致：认领转出1300.49、到款1750.55、余额450.06、挂帐—；底部调账0/0，无重复计算。标题、月份、六列表头及制单人/17:15打印时间一致。17:15:04文件实际保存，工具事件超时不影响实际文件核验。
result：通过
businessIds：A3597284940257984512
verification：后台页面查询
实际xlsx文件内容
evidence：export-verification/R09-B12-待认领按月.xlsx
export-verification/R09-导出内容核验.json
issueIds：
执行设计（非执行结果）：
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
dataIds：D-01
D-02
D-03
D-07
sampleKey：QA-PM-20261111-PM-024-03-S02
dependencies：PM-001
PM-007
steps：后台对帐单按月查询待认领并导出
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只把消费列改为认领转出；原支付日到款、使用日转出取绝对值，不再计底部调账；列数查询导出保持
verification：B12
protocolId：P-REPORT
checkpoints：W16分组明细/小计/总计→B12日月及导出→本轮原单集合
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

### PM-024-04 后台对帐单查目标与窗口充值报表查迁移
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:32:50.051644
preconditions：本轮来源分配已完成，所有共享支付配置和资源已恢复
steps：后台报表中心原合作伙伴对帐单按日及按月查询待认领和本轮G
与本轮W16金额、源转出和G客户充值及公司收入单据比对
expected：目标仅计客户充值不含公司收入；窗口排除迁移人工调账退款自动调整
actual：本轮G日对帐人数2、消费0.02、到账0.05、余额0.04；月对帐消费0.02、到款0.06、余额0.04。日0.05仅客户充值，排除同日U/V公司收入0.02；13日另有客户充值0.01故月0.06。窗口报表原资源列总计300.17，无迁移生成消费或自动调整另计收款。
result：通过
businessIds：A3597284940257984512
A3618964766937858049
RG3619087757621346308
RG3619087757621346310
RG3619085867835736068
verification：W16
B12
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮入款/转出/目标/收入单号及时间负责人快照齐全；按支付日和完成时刻区分统计。
dataIds：D-01
D-02
D-03
D-07
sampleKey：QA-PM-20261111-PM-024-04
dependencies：PM-001
PM-007
steps：后台对帐单查目标与窗口充值报表查迁移
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-REPORT的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：目标仅计客户充值不含公司收入；窗口排除迁移人工调账退款自动调整
verification：W16
B12
protocolId：P-REPORT
checkpoints：W16分组明细/小计/总计→B12日月及导出→本轮原单集合
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12

## PM-025 正常顺序操作下提交重校验
模块：保存与重校验
预期：旧来源/已结清或退款变化不得重复处理；拒绝无半笔业务；支付配置按刷新重开口径，不宣称故障原子性验证
当前：有问题

### PM-025-01 打开表单后顺序完成来源使用再返回旧表单提交
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:11:47.094573+08:00
actual：独立列表入口先认领成功后，保留的售票旧W02再提交被拒绝，但提示合作伙伴参数不合法；不能确认拒绝由来源已使用保护触发，本分支仍未跑完，需用列表有效目标再核验。未重复记账。
result：未跑
evidence：
issueIds：
runId：R01
executedAt：2026-11-14T03:19:23.979799+08:00
preconditions：新来源RG3619026356768882690 0.01，两个列表有效G目标表单均先选择该来源；正常顺序提交，不并发
steps：打开表单后顺序完成来源使用再返回旧表单提交
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：重读使用状态余额并拒绝重复使用；不并发操作
actual：第一个列表表单成功生成转出RG3619026872164958210-0.01及目标RG3619026872164958212+0.01。随后第二旧表单再提交被拒绝“合作伙伴参数不合法”。来源已使用，后台来源详情仅关联这一对单据；窗口G支付日14日仅原两笔POS及本笔充值。重新查询伙伴列表后余额0.02→0.03，未重复扣源或充目标。提示文案笼统，未称其明确提示来源已用。
result：通过
businessIds：RG3619026356768882690
RG3619026872164958210
RG3619026872164958212
verification：W02
W04
W06
W08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮独立来源及订单；按正常顺序改状态，不并发或注入故障；支付刷新依2026-11-11确认。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-025-01
dependencies：PM-001
steps：打开表单后顺序完成来源使用再返回旧表单提交
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：重读使用状态余额并拒绝重复使用；不并发操作
verification：W02
W04
W06
W08
protocolId：P-RECHECK
checkpoints：原表单→正常状态变更→提交/重开→原单状态及适用关联记录
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W08
path：../development-spec.html#W08
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-025-02 打开回款表单后顺序完成部分退款再返回提交
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:50:47.992971+08:00
preconditions：本轮K两票0.02，独立QA标签正常退一票0.01；旧回款弹窗保留退款前0.02
steps：打开回款表单后顺序完成部分退款再返回提交
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：重读订单净额／状态，要求重新查选，不用旧金额再次结清
actual：窗口旧W06停留D=S=0.02、现金0.02；另一标签正常退票56GC2B25DL225成功0.01（售后LYAS3618996377808863232），再提交旧W06明确拒绝“订单应回款金额已变化，请重新选择订单”，退出弹窗并清选择，列表刷新净额0.01。后台当时仅原消费-0.02未回款及退款+0.01，无新增结清充值。
result：通过
businessIds：DD261114024642001001s
LYAS3618996377808863232
RG3618997391509438466
RG3618997391509438468
verification：W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮独立来源及订单；按正常顺序改状态，不并发或注入故障；支付刷新依2026-11-11确认。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-025-02
dependencies：PM-001
steps：打开回款表单后顺序完成部分退款再返回提交
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：重读订单净额／状态，要求重新查选，不用旧金额再次结清
verification：W06
protocolId：P-RECHECK
checkpoints：原表单→正常状态变更→提交/重开→原单状态及适用关联记录
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W08
path：../development-spec.html#W08
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-025-02-S02 打开回款表单后顺序完成全退再返回提交
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:53:30.922104+08:00
preconditions：本轮自建L公共临客订单0.01，旧表单先打开，另一测试标签正常全退
steps：打开回款表单后顺序完成全退再返回提交
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：重读订单净额／状态，要求重新查选，不用旧金额再次结清
actual：本轮L订单DD261114025142001001s原0.01，旧W06现金0.01保持。另一标签正常全退0.01，售后LYAS3619000260459298816成功；旧W06提交拒绝“订单状态已变化，请重新选择订单”，关闭清选择且L退出待回款。后台仅原消费-0.01及退款+0.01各一笔，无新结清充值。
result：通过
businessIds：DD261114025142001001s
LYAS3619000260459298816
verification：W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮独立来源及订单；按正常顺序改状态，不并发或注入故障；支付刷新依2026-11-11确认。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-025-02-S02
dependencies：PM-001
steps：打开回款表单后顺序完成全退再返回提交
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：重读订单净额／状态，要求重新查选，不用旧金额再次结清
verification：W06
protocolId：P-RECHECK
checkpoints：原表单→正常状态变更→提交/重开→原单状态及适用关联记录
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W08
path：../development-spec.html#W08
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-025-02-S03 打开回款表单后顺序从另一正常入口完成结清再返回提交
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:22:19.719134+08:00
preconditions：本轮M单DD261114031418001001s未回款0.01；窗口旧表单先打开，后台西瓜正常回款，不并发
steps：打开回款表单后顺序从另一正常入口完成结清再返回提交
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：重读订单净额／状态，要求重新查选，不用旧金额再次结清
actual：窗口保留M原0.01合法现金回款表单；后台正常入口先结清M，随后旧窗口提交明确拒绝订单状态已变化，请重新选择订单，退出旧表单并清选择；待回款查M空，已回款仅关联后台单RG3619029638123896834。未重复结清。
result：通过
businessIds：DD261114031418001001s
RG3619029638123896834
verification：W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮独立来源及订单；按正常顺序改状态，不并发或注入故障；支付刷新依2026-11-11确认。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-025-02-S03
dependencies：PM-001
steps：打开回款表单后顺序从另一正常入口完成结清再返回提交
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：重读订单净额／状态，要求重新查选，不用旧金额再次结清
verification：W06
protocolId：P-RECHECK
checkpoints：原表单→正常状态变更→提交/重开→原单状态及适用关联记录
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W08
path：../development-spec.html#W08
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-025-03 打开表单后安全变更业务目标有效性再提交
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:01:31.568752+08:00
preconditions：本轮自建G，原启用且余额0.02；仅目标有效性变更，不修改支付配置
steps：记录专属测试目标原状态，打开表单后按正常入口使业务目标失效
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：业务目标失效按增补提交保护拒绝；不把支付资源配置变更与业务目标有效性混为一项
actual：保留G旧W02表单，金额0.01、现金0.01；后台03:00:34禁用G后提交，被明确拒绝“合作伙伴已禁用”。取消后后台03:00:48恢复启用，重新打开余额仍0.02；窗口账户充值按原过滤重新查询仍原三笔RG3618980125740908546、RG3618974714082115586、RG3619003799600644098，无新增充值。
result：通过
businessIds：P3618964766937858048
A3618964766937858049
verification：W02
W06
W08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮独立来源及订单；按正常顺序改状态，不并发或注入故障；支付刷新依2026-11-11确认。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-025-03
dependencies：PM-001
steps：记录专属测试目标原状态，打开表单后按正常入口使业务目标失效
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：业务目标失效按增补提交保护拒绝；不把支付资源配置变更与业务目标有效性混为一项
verification：W02
W06
W08
protocolId：P-RECHECK
checkpoints：原表单→正常状态变更→提交/重开→原单状态及适用关联记录
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W08
path：../development-spec.html#W08
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-025-04 对上述正常校验拒绝及成功结果回查
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:17:16.321877+08:00
preconditions：复用R01真实单据及本轮正常操作结果，不追加故障或并发
steps：复用已逐单记录的来源重复、订单金额变化、目标禁用保护回查
新增完整同名拒绝及唯一名称成功的档案/账户/原单/流水回查
expected：拒绝不留孤立档案、半笔正负账或已用来源；成功各关联一致，不做故障注入
actual：汇总本轮正常保护后的已完成回查：PM-025-01同源先成功后旧单拒绝，来源只使用一次、唯一转出/目标0.01，G余额0.02→0.03；PM-025-02退款后旧回款0.02被拒绝，原消费-0.02/退款+0.01保留，随后按净额0.01结清并关联收入0.01；PM-025-03禁用G后旧表单拒绝，恢复后余额0.02及原充值3笔均不变。本批新建同名目标拒绝保留订单，改唯一名后只创建AA一档、一条目标消费，挂帐0.00/预付-0.01，W16不因迁移增加。拒绝与成功均未见半笔或重复记账；只做页面可见核对，无数据库/故障注入。
result：通过
businessIds：RG3619026356768882690
RG3619026872164958210
RG3619026872164958212
DD261114024642001001s
LYAS3618996377808863232
DD261114051304001001s
A3619146993810292737
verification：W02
W04
W06
W08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮独立来源及订单；按正常顺序改状态，不并发或注入故障；支付刷新依2026-11-11确认。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-025-04
dependencies：PM-001
steps：对上述正常校验拒绝及成功结果回查
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：拒绝不留孤立档案、半笔正负账或已用来源；成功各关联一致，不做故障注入
verification：W02
W04
W06
W08
protocolId：P-RECHECK
checkpoints：原表单→正常状态变更→提交/重开→原单状态及适用关联记录
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W08
path：../development-spec.html#W08
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-025-05 售票页后台改支付配置后点对应刷新按钮
范围：本期必测
结果：有问题
原因：
runId：R01
executedAt：2026-11-14T04:48:57.331372+08:00
preconditions：扫码付停用时分别重开过售票和伙伴标签，再后台恢复启用且表格UI确认。
steps：在对应业务页点击顶部圆箭头刷新图标
打开G充值核对候选
整页刷新重开对照
expected：读取当前有效配置；不要求未刷新的主页面实时更新，按已确认支付口径
actual：点击顶部刷新后新开充值仍显示扫码付disabled。整页刷新并重选G后扫码付恢复可选、资源原名及CCB-SK-012121212121212正确；故仍为支付缓存未更新。
result：有问题
businessIds：A3618964766937858049
verification：W00
W01
evidence：evidence/PM-BUG-005-售票顶部刷新后仍旧扫码禁用.png
issueIds：PM-BUG-005
执行设计（非执行结果）：
preconditions：本轮独立来源及订单；按正常顺序改状态，不并发或注入故障；支付刷新依2026-11-11确认。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-025-05
dependencies：PM-001
steps：售票页后台改支付配置后点对应刷新按钮
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：读取当前有效配置；不要求未刷新的主页面实时更新，按已确认支付口径
verification：W00
W01
protocolId：P-RECHECK
checkpoints：原表单→正常状态变更→提交/重开→原单状态及适用关联记录
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W08
path：../development-spec.html#W08
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-025-05-S02 售票页后台改支付配置后关闭业务标签再打开
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:47:45.839256+08:00
preconditions：扫码付原启用、排序2、跟收银账号、多资源、四场景，G默认预付。
steps：记录原手选扫码资源
后台停用扫码付保存
取消弹窗并关闭对应整个业务标签
从菜单重开和重新选择G
核对新候选与资源；恢复扫码启用
expected：读取当前有效配置；不要求未刷新的主页面实时更新，按已确认支付口径
actual：售票G充值原手选扫码付及CCB-SK-012121212121212；后台停用扫码付后旧弹窗沿用原配置。取消弹窗、关闭整个售票业务标签并从菜单重开，重选G打开充值，扫码付已disabled，默认现金且无原柜台编码。 扫码付已恢复启用，其余原值UI回查。
result：通过
businessIds：A3618964766937858049
verification：W00
W01
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮独立来源及订单；按正常顺序改状态，不并发或注入故障；支付刷新依2026-11-11确认。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-025-05-S02
dependencies：PM-001
steps：售票页后台改支付配置后关闭业务标签再打开
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：读取当前有效配置；不要求未刷新的主页面实时更新，按已确认支付口径
verification：W00
W01
protocolId：P-RECHECK
checkpoints：原表单→正常状态变更→提交/重开→原单状态及适用关联记录
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W08
path：../development-spec.html#W08
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-025-05-S03 合作伙伴业务标签后台改支付配置后点对应刷新按钮
范围：本期必测
结果：有问题
原因：
runId：R01
executedAt：2026-11-14T04:48:57.331372+08:00
preconditions：扫码付停用时分别重开过售票和伙伴标签，再后台恢复启用且表格UI确认。
steps：在对应业务页点击顶部圆箭头刷新图标
打开G充值核对候选
整页刷新重开对照
expected：读取当前有效配置；不要求未刷新的主页面实时更新，按已确认支付口径
actual：点击顶部刷新后新开充值仍显示扫码付disabled。整页刷新并重选G后扫码付恢复可选、资源原名及CCB-SK-012121212121212正确；故仍为支付缓存未更新。
result：有问题
businessIds：A3618964766937858049
verification：W00
W01
evidence：evidence/PM-BUG-005-顶部刷新后仍旧扫码禁用.png
issueIds：PM-BUG-005
执行设计（非执行结果）：
preconditions：本轮独立来源及订单；按正常顺序改状态，不并发或注入故障；支付刷新依2026-11-11确认。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-025-05-S03
dependencies：PM-001
steps：合作伙伴业务标签后台改支付配置后点对应刷新按钮
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：读取当前有效配置；不要求未刷新的主页面实时更新，按已确认支付口径
verification：W00
W01
protocolId：P-RECHECK
checkpoints：原表单→正常状态变更→提交/重开→原单状态及适用关联记录
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W08
path：../development-spec.html#W08
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-025-05-S04 合作伙伴业务标签后台改支付配置后关闭业务标签再打开
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:47:45.839256+08:00
preconditions：扫码付原启用、排序2、跟收银账号、多资源、四场景，G默认预付。
steps：记录原手选扫码资源
后台停用扫码付保存
取消弹窗并关闭对应整个业务标签
从菜单重开和重新选择G
核对新候选与资源；恢复扫码启用
expected：读取当前有效配置；不要求未刷新的主页面实时更新，按已确认支付口径
actual：后台停用扫码付，取消充值并关闭整个合作伙伴业务标签，从菜单重开；查询G并打开列表充值，扫码付已disabled、默认现金，无原资源草稿。 扫码付已恢复启用，其余原值UI回查。
result：通过
businessIds：A3618964766937858049
verification：W00
W01
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮独立来源及订单；按正常顺序改状态，不并发或注入故障；支付刷新依2026-11-11确认。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-025-05-S04
dependencies：PM-001
steps：合作伙伴业务标签后台改支付配置后关闭业务标签再打开
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：读取当前有效配置；不要求未刷新的主页面实时更新，按已确认支付口径
verification：W00
W01
protocolId：P-RECHECK
checkpoints：原表单→正常状态变更→提交/重开→原单状态及适用关联记录
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W08
path：../development-spec.html#W08
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-025-06 W02后台改配置后关闭重开弹窗
范围：本期必测
结果：通过
原因：R11实测：R11新登录YST售票页，AA余额0.09、空购物车。先加载账号默认2号；改设备归属并把设备默认设1号，重开钱包正确读1号CCB-SK-011。保持设备归属不变，再先后将设备默认1→2、2→1，后台每次保存重开核验；售票页不整页刷新，仅取消后重开钱包，分别正确显示2号CCB-SK-012121212121212和1号CCB-SK-011。R10钱包旧值现象本轮未复现，未提交充值。顶部刷新2旧分支本轮未跑，不以此宣布全部修复。
runId：R01
executedAt：2026-11-14T02:36:55.968153+08:00
preconditions：扫码付临时跟设备多资源，设备默认1号，账号默认2号；后台重开确认保存值
steps：W02后台改配置后关闭重开弹窗
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：重开后方式候选、资源及编号正确；缺默认不可擅自兜底，恢复后再回查
actual：后台扫码付由账号改设备，并把YST设备默认由2改1，保存后再次打开设备配置确认默认1。窗口关闭W02再打开仍旧2号CCB-SK-012121212121212；整页刷新后W02才带出1号CCB-SK-011。未以旧资源提交。
result：有问题
businessIds：A3618964766937858049
verification：W02
evidence：evidence/PM-BUG-005-重开充值仍为账号旧资源.png
evidence/PM-BUG-005-设备默认已保存为1号.png
issueIds：PM-BUG-005
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：重开后方式候选、资源及编号正确；缺默认不可擅自兜底，恢复后再回查
actual：扫码归属改设备，设备默认由2号改1号且重开后台确认保存；售票页钱包关闭重开仍2号CCB-SK-012121212121212；列表行新开已读1号CCB-SK-011。未用旧资源提交。
result：有问题
businessIds：
verification：W02
evidence：evidence/PM-BUG-005-R10-设备已保存1号.jpg
evidence/PM-BUG-005-R10-设备默认1号重开仍2号.jpg
issueIds：PM-BUG-005
record：R10-20261127-开发修复回归.md
runId：R11
executedAt：2026-11-27
preconditions：账号绑定默认2号；设备两个候选默认临时改为1号；扫码付从账号归属临时改设备归属，后台保存及重开已核对
steps：账号默认2号先加载；扫码改设备归属并设设备默认1号，后台保存重开核对
售票页只取消并重开钱包，检查1号
保持归属不变，再测试设备默认1→2和2→1，每次后台重开确认，售票页不整页刷新
取消草稿并恢复扫码账号归属、设备默认2号
expected：重开后方式候选、资源及编号正确；缺默认不可擅自兜底，恢复后再回查
actual：R11新登录YST售票页，AA余额0.09、空购物车。先加载账号默认2号；改设备归属并把设备默认设1号，重开钱包正确读1号CCB-SK-011。保持设备归属不变，再先后将设备默认1→2、2→1，后台每次保存重开核验；售票页不整页刷新，仅取消后重开钱包，分别正确显示2号CCB-SK-012121212121212和1号CCB-SK-011。R10钱包旧值现象本轮未复现，未提交充值。顶部刷新2旧分支本轮未跑，不以此宣布全部修复。
result：通过
businessIds：
verification：W02
evidence：evidence/PM-BUG-005-R11-03-后台重开确认设备默认1号.png
evidence/PM-BUG-005-R11-04-同页面重开已读设备1号.png
issueIds：PM-BUG-005
record：R11-20261127-争议问题复核.md
执行设计（非执行结果）：
preconditions：本轮独立来源及订单；按正常顺序改状态，不并发或注入故障；支付刷新依2026-11-11确认。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-025-06
dependencies：PM-001
steps：W02后台改配置后关闭重开弹窗
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：重开后方式候选、资源及编号正确；缺默认不可擅自兜底，恢复后再回查
verification：W02
protocolId：P-RECHECK
checkpoints：原表单→正常状态变更→提交/重开→原单状态及适用关联记录
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W08
path：../development-spec.html#W08
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-025-06-S02 W03后台改配置后关闭重开弹窗
范围：本期必测
结果：通过
原因：R10真实回归：W03重开立即读取最新排序、场景和启用状态。
runId：R01
executedAt：2026-11-14T03:17:33.433158+08:00
preconditions：扫码2/银行卡8/现金20及微信场景/支付宝临时资格已正常保存，随后逐项恢复
steps：W03后台改配置后关闭重开弹窗
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：重开后方式候选、资源及编号正确；缺默认不可擅自兜底，恢复后再回查
actual：后台恢复微信原5/伙伴场景及支付宝启用后，W03关闭重开仍将微信、支付宝禁选；整页刷新后重开五方式全部可选。
result：有问题
businessIds：DD261114031418001001s
verification：W03
evidence：
issueIds：PM-BUG-005
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：重开后方式候选、资源及编号正确；缺默认不可擅自兜底，恢复后再回查
actual：W03重开立即读取最新排序、场景和启用状态。
result：通过
businessIds：
verification：W03
evidence：evidence/PM-BUG-005-R10-设备已保存1号.jpg
evidence/PM-BUG-005-R10-设备默认1号重开仍2号.jpg
issueIds：PM-BUG-005
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：本轮独立来源及订单；按正常顺序改状态，不并发或注入故障；支付刷新依2026-11-11确认。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-025-06-S02
dependencies：PM-001
steps：W03后台改配置后关闭重开弹窗
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：重开后方式候选、资源及编号正确；缺默认不可擅自兜底，恢复后再回查
verification：W03
protocolId：P-RECHECK
checkpoints：原表单→正常状态变更→提交/重开→原单状态及适用关联记录
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W08
path：../development-spec.html#W08
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-025-06-S03 W06后台改配置后关闭重开弹窗
范围：本期必测
结果：通过
原因：R10真实回归：W06本轮新开即时按新配置过滤支付候选；未整页刷新。
runId：R01
executedAt：2026-11-14T03:17:33.433158+08:00
preconditions：扫码2/银行卡8/现金20及微信场景/支付宝临时资格已正常保存，随后逐项恢复
steps：W06后台改配置后关闭重开弹窗
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：重开后方式候选、资源及编号正确；缺默认不可擅自兜底，恢复后再回查
actual：后台恢复微信及支付宝后，关闭W06再打开仍只有现金/扫码/银行卡三种普通方式，恢复的两种未回来；同页整刷后W03恢复五方式。
result：有问题
businessIds：DD261114031418001001s
verification：W06
evidence：evidence/PM-BUG-005-回款重开仍缺恢复方式.png
issueIds：PM-BUG-005
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：重开后方式候选、资源及编号正确；缺默认不可擅自兜底，恢复后再回查
actual：W06本轮新开即时按新配置过滤支付候选；未整页刷新。
result：通过
businessIds：
verification：W06
evidence：evidence/PM-BUG-005-R10-设备已保存1号.jpg
evidence/PM-BUG-005-R10-设备默认1号重开仍2号.jpg
issueIds：PM-BUG-005
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：本轮独立来源及订单；按正常顺序改状态，不并发或注入故障；支付刷新依2026-11-11确认。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-025-06-S03
dependencies：PM-001
steps：W06后台改配置后关闭重开弹窗
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：重开后方式候选、资源及编号正确；缺默认不可擅自兜底，恢复后再回查
verification：W06
protocolId：P-RECHECK
checkpoints：原表单→正常状态变更→提交/重开→原单状态及适用关联记录
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W08
path：../development-spec.html#W08
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-025-07 旧支付弹窗沿用已加载配置，业务状态保护单独核验
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:20:12.649321+08:00
preconditions：G预付款余额0.04，售票充值已打开并选扫码柜台2；补前批列表、待认领、临客旧弹窗沿用观察
steps：后台正常停用扫码付保存
观察原售票G充值弹窗仍已选扫码和柜台2原编号，不要求实时重读
取消草稿，恢复后台扫码启用并逐项回查
复用独立来源已用、订单退款后净额变化、目标禁用的正常保护回查
expected：不因旧弹窗未实时读取后台支付配置而判缺陷；不强制制造交易，真实收款不自动执行；来源已用及订单状态保护不放宽
actual：售票G旧弹窗在后台停用后仍选择扫码付、柜台2及CCB-SK-012121212121212，未自动切现金或丢失已加载配置；按11月11日口径不记缺陷。结合PM-026-11/17/23已观察的列表、待认领及公共临客三类旧弹窗，所需入口均覆盖。业务状态保护分别以PM-025-01/02/03核验：同源不重复记账、退款后净额变化拒绝旧金额、目标禁用拒绝；不因允许旧支付配置而放宽这些保护。此次无充值提交，G保持0.04。已恢复扫码启用、排序2、原四场景、跟收银账号、多资源并UI回查，取消全部草稿。
result：通过
businessIds：A3618964766937858049
RG3619026356768882690
RG3619026872164958210
RG3619026872164958212
DD261114024642001001s
LYAS3618996377808863232
verification：W00
W01
W02
W03
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮独立来源及订单；按正常顺序改状态，不并发或注入故障；支付刷新依2026-11-11确认。
dataIds：D-01
D-02
D-03
D-05
sampleKey：QA-PM-20261111-PM-025-07
dependencies：PM-001
steps：记录弹窗已加载的支付方式资源编号，后台正常变更对应专属测试配置
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECHECK的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不因旧弹窗未实时读取后台支付配置而判缺陷；不强制制造交易，真实收款不自动执行；来源已用及订单状态保护不放宽
verification：W00
W01
W02
W03
W06
protocolId：P-RECHECK
checkpoints：原表单→正常状态变更→提交/重开→原单状态及适用关联记录
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W04
path：../development-spec.html#W04
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W08
path：../development-spec.html#W08
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

## PM-026 支付排序、首次默认及选择保留
模块：支付与日期
预期：过滤后排序及默认一致；刷新/重开沿支付口径；不串场景、不遗留旧资源
当前：通过

### PM-026-01 售票页长期充值验证五种适用方式候选
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:57:06.575583+08:00
preconditions：QA TEST本轮自建G伙伴，预付款余额从0.00开始；后台西瓜／窗口YST分别操作
steps：售票页长期充值验证五种适用方式候选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：候选全集与后台资格取交集，无多余方式
actual：售票钱包W02本轮已逐项核对五种普通候选现金、扫码付、银行卡、微信、支付宝，顺序1/2/3/5/6，与后台启用场景及YST主体资格交集一致；待认领内部来源单独展示，未混入普通方式枚举。
result：通过
businessIds：
verification：W00
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-01
dependencies：PM-001
steps：售票页长期充值验证五种适用方式候选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：候选全集与后台资格取交集，无多余方式
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-02 售票页长期充值验证三项候选和跳号2/8/20
范围：本期必测
结果：通过
原因：R10真实回归：W02售票入口有效候选按2/3/5/6/20，首次默认扫码，未固定现金。其他入口及过滤分支待补。
runId：R01
executedAt：2026-11-14T03:15:06.441603+08:00
preconditions：已登记四项临时支付配置原值；扫码付2/银行卡8/现金20有效，微信1不适用当前场景，支付宝停用；整页刷新测试浏览器
steps：售票页长期充值验证三项候选和跳号2/8/20
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：过滤后升序，首次默认2，不固定现金
actual：后台扫码付2、银行卡8、现金20；微信1启用但仅其他场景、支付宝停用。整页刷新后，当前入口仍现金→扫码付→银行卡，首次默认现金，没有按有效排序2→8→20、默认扫码付执行。W02/W03将不适用微信及停用支付宝显示为禁选，W06不显示；失效方式均不可正常选择。本轮未以临时配置进行收款。
result：有问题
businessIds：
verification：W00
W02
evidence：evidence/PM-BUG-007-列表充值未按有效排序默认.png
evidence/PM-BUG-007-后台支付跳号排序及场景.png
issueIds：PM-BUG-007
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：过滤后升序，首次默认2，不固定现金
actual：W02售票入口有效候选按2/3/5/6/20，首次默认扫码，未固定现金。其他入口及过滤分支待补。
result：通过
businessIds：
verification：W00
W02
evidence：
issueIds：PM-BUG-007
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-02
dependencies：PM-001
steps：售票页长期充值验证三项候选和跳号2/8/20
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：过滤后升序，首次默认2，不固定现金
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-03 售票页长期充值验证其他场景更小序号
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:26:49.053881
preconditions：微信从排序5临时改0，取消合作伙伴充值/回款场景，其余场景及启用保持；完整刷新窗口
steps：正常UI保存临时配置，刷新窗口
逐一打开售票G充值、列表G充值、待认领入款及临客回款，检查默认后取消
恢复原配置并列表回查
expected：不进入本页候选、不干扰本页默认
actual：四入口均默认现金1，不被微信0干扰。售票G充值、列表G充值、待认领入款的微信禁用不可选；临客回款不列微信。配置已恢复排序5、启用及内导售票/合作伙伴充值回款/散客售票/团队售票四场景。回款仅借已有未结清订单查看弹窗后取消，未提交或修改旧订单。
result：通过
businessIds：A3618964766937858049
A3597284940257984512
DD260901151252001001s
verification：W00
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-03
dependencies：PM-001
steps：售票页长期充值验证其他场景更小序号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不进入本页候选、不干扰本页默认
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-04 售票页长期充值验证有效手选后重绘／仅排序变化
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:46:03.070069+08:00
preconditions：共享支付配置均为原值，G余额0.04、待认领0.04。
steps：打开对应入口
按记录手选或切页取消
回查字段、候选和保留状态
取消草稿，不提交
expected：手选仍有效时保留，不强行重置
actual：售票G充值手选微信，依次修改充值0.02、其他收入0.01及备注，微信仍checked、合计0.03、无现金字段；取消未提交。
result：通过
businessIds：A3618964766937858049
verification：W00
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-04
dependencies：PM-001
steps：售票页长期充值验证有效手选后重绘／仅排序变化
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：手选仍有效时保留，不强行重置
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-05 售票页长期充值验证手选方式失效后刷新／重开
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:47:45.839256+08:00
preconditions：扫码付原启用、排序2、跟收银账号、多资源、四场景，G默认预付。
steps：记录原手选扫码资源
后台停用扫码付保存
取消弹窗并关闭对应整个业务标签
从菜单重开和重新选择G
核对新候选与资源；恢复扫码启用
expected：按已确认支付逻辑更新候选并清旧资源草稿
actual：售票G充值手选扫码付带原柜台编码；后台停用扫码付后取消弹窗并关闭整个业务标签再重开，手选失效候选禁用，原资源草稿清除；保留预付款账户，不替换账户。 扫码付已恢复启用，其余原值UI回查。
result：通过
businessIds：A3618964766937858049
verification：W00
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-05
dependencies：PM-001
steps：售票页长期充值验证手选方式失效后刷新／重开
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按已确认支付逻辑更新候选并清旧资源草稿
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-06 售票页长期充值验证第一方式缺资源
范围：本期必测
结果：通过
原因：R10真实回归：首位设为银行卡sort0、设备归属无POS绑定。四入口均默认首位银行卡而非回退现金；W02售票/列表及W03提示默认资源不可用，填0.01确认仍禁用；W06提示当前支付方式不可用、确认回款禁用。均取消无提交。
runId：R01
executedAt：2026-11-14T05:00:58.847313+08:00
preconditions：扫码排序0、现金1，扫码跟窗口设备，专属YST团队设备扫码可用/默认均为空；启用四场景、多资源不变。
steps：正常保存排序和设备空绑定
整页刷新窗口
分别打开售票G充值、列表G充值、待认领入款、临客X回款
核对初始选择和资源提示
恢复设备柜台1/2默认2及全局扫码排序2跟账号
expected：不自动跳现金；提示资源不可用，允许主动换其他有效方式
actual：四入口初始均默认现金，无第一方式资源不可用提示；扫码仍列在现金之后。售票入口手动选择扫码才显示默认资源不可用并禁止确认。属于既有现金固定优先问题，导致本分支未按第一方式缺资源规则执行。未提交交易；配置均已恢复并UI回查。
result：有问题
businessIds：
verification：W00
W02
evidence：evidence/PM-BUG-007-扫码第一缺资源仍默认现金.png
issueIds：PM-BUG-007
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：不自动跳现金；提示资源不可用，允许主动换其他有效方式
actual：首位设为银行卡sort0、设备归属无POS绑定。四入口均默认首位银行卡而非回退现金；W02售票/列表及W03提示默认资源不可用，填0.01确认仍禁用；W06提示当前支付方式不可用、确认回款禁用。均取消无提交。
result：通过
businessIds：
verification：W00
W02
evidence：
issueIds：PM-BUG-007
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-06
dependencies：PM-001
steps：售票页长期充值验证第一方式缺资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不自动跳现金；提示资源不可用，允许主动换其他有效方式
verification：W00
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-07 列表行长期充值验证五种适用方式候选
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:57:06.575583+08:00
preconditions：QA TEST本轮自建G伙伴，预付款余额从0.00开始；后台西瓜／窗口YST分别操作
steps：列表行长期充值验证五种适用方式候选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：候选全集与后台资格取交集，无多余方式
actual：列表行W02本轮已逐项核对五种普通候选现金、扫码付、银行卡、微信、支付宝，顺序1/2/3/5/6，与后台启用场景及YST主体资格交集一致；待认领内部来源单独展示，未混入普通方式枚举。
result：通过
businessIds：
verification：W01
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-07
dependencies：PM-001
steps：列表行长期充值验证五种适用方式候选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：候选全集与后台资格取交集，无多余方式
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-08 列表行长期充值验证三项候选和跳号2/8/20
范围：本期必测
结果：通过
原因：R10真实回归：W02售票/列表：微信排序0但无伙伴场景、支付宝停用，均禁选；有效扫码2、银行卡3、现金20按顺序，首次默认扫码。
runId：R01
executedAt：2026-11-14T03:15:06.441603+08:00
preconditions：已登记四项临时支付配置原值；扫码付2/银行卡8/现金20有效，微信1不适用当前场景，支付宝停用；整页刷新测试浏览器
steps：列表行长期充值验证三项候选和跳号2/8/20
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：过滤后升序，首次默认2，不固定现金
actual：后台扫码付2、银行卡8、现金20；微信1启用但仅其他场景、支付宝停用。整页刷新后，当前入口仍现金→扫码付→银行卡，首次默认现金，没有按有效排序2→8→20、默认扫码付执行。W02/W03将不适用微信及停用支付宝显示为禁选，W06不显示；失效方式均不可正常选择。本轮未以临时配置进行收款。
result：有问题
businessIds：
verification：W01
W02
evidence：evidence/PM-BUG-007-列表充值未按有效排序默认.png
evidence/PM-BUG-007-后台支付跳号排序及场景.png
issueIds：PM-BUG-007
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：过滤后升序，首次默认2，不固定现金
actual：W02售票/列表：微信排序0但无伙伴场景、支付宝停用，均禁选；有效扫码2、银行卡3、现金20按顺序，首次默认扫码。
result：通过
businessIds：
verification：W01
W02
evidence：
issueIds：PM-BUG-007
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-08
dependencies：PM-001
steps：列表行长期充值验证三项候选和跳号2/8/20
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：过滤后升序，首次默认2，不固定现金
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-09 列表行长期充值验证其他场景更小序号
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:26:49.053887
preconditions：微信从排序5临时改0，取消合作伙伴充值/回款场景，其余场景及启用保持；完整刷新窗口
steps：正常UI保存临时配置，刷新窗口
逐一打开售票G充值、列表G充值、待认领入款及临客回款，检查默认后取消
恢复原配置并列表回查
expected：不进入本页候选、不干扰本页默认
actual：四入口均默认现金1，不被微信0干扰。售票G充值、列表G充值、待认领入款的微信禁用不可选；临客回款不列微信。配置已恢复排序5、启用及内导售票/合作伙伴充值回款/散客售票/团队售票四场景。回款仅借已有未结清订单查看弹窗后取消，未提交或修改旧订单。
result：通过
businessIds：A3618964766937858049
A3597284940257984512
DD260901151252001001s
verification：W01
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-09
dependencies：PM-001
steps：列表行长期充值验证其他场景更小序号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不进入本页候选、不干扰本页默认
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-10 列表行长期充值验证有效手选后重绘／仅排序变化
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:46:03.070069+08:00
preconditions：共享支付配置均为原值，G余额0.04、待认领0.04。
steps：打开对应入口
按记录手选或切页取消
回查字段、候选和保留状态
取消草稿，不提交
expected：手选仍有效时保留，不强行重置
actual：列表G充值手选微信，依次修改充值0.02、其他收入0.01及备注，微信仍checked、合计0.03、无现金字段；取消未提交。
result：通过
businessIds：A3618964766937858049
verification：W01
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-10
dependencies：PM-001
steps：列表行长期充值验证有效手选后重绘／仅排序变化
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：手选仍有效时保留，不强行重置
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-11 列表行长期充值验证手选方式失效后刷新／重开
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:56:34.739949+08:00
preconditions：列表G、待认领、临客X各自独立标签有效手选扫码资源2，正常配置。
steps：各入口手选有效扫码柜台2并填写0.01
后台停用扫码付保存
观察旧弹窗仍保留已加载选择，不记缺陷
整页刷新对应标签并重开同一业务
核对新候选及旧资源草稿；恢复扫码启用，取消所有草稿
expected：按已确认支付逻辑更新候选并清旧资源草稿
actual：停用后旧弹窗均保留已加载扫码及CCB-SK-012121212121212；刷新重开后列表G及待认领扫码禁用，临客回款候选移除扫码；均默认现金、无旧柜台编号及资源草稿，无新增提交。现扫码已恢复启用、其他原值未改，X仍未回款0.01。
result：通过
businessIds：
verification：W01
W02
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-11
dependencies：PM-001
steps：列表行长期充值验证手选方式失效后刷新／重开
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按已确认支付逻辑更新候选并清旧资源草稿
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-12 列表行长期充值验证第一方式缺资源
范围：本期必测
结果：通过
原因：R10真实回归：首位设为银行卡sort0、设备归属无POS绑定。四入口均默认首位银行卡而非回退现金；W02售票/列表及W03提示默认资源不可用，填0.01确认仍禁用；W06提示当前支付方式不可用、确认回款禁用。均取消无提交。
runId：R01
executedAt：2026-11-14T05:00:58.847313+08:00
preconditions：扫码排序0、现金1，扫码跟窗口设备，专属YST团队设备扫码可用/默认均为空；启用四场景、多资源不变。
steps：正常保存排序和设备空绑定
整页刷新窗口
分别打开售票G充值、列表G充值、待认领入款、临客X回款
核对初始选择和资源提示
恢复设备柜台1/2默认2及全局扫码排序2跟账号
expected：不自动跳现金；提示资源不可用，允许主动换其他有效方式
actual：四入口初始均默认现金，无第一方式资源不可用提示；扫码仍列在现金之后。售票入口手动选择扫码才显示默认资源不可用并禁止确认。属于既有现金固定优先问题，导致本分支未按第一方式缺资源规则执行。未提交交易；配置均已恢复并UI回查。
result：有问题
businessIds：
verification：W01
W02
evidence：evidence/PM-BUG-007-扫码第一缺资源仍默认现金.png
issueIds：PM-BUG-007
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：不自动跳现金；提示资源不可用，允许主动换其他有效方式
actual：首位设为银行卡sort0、设备归属无POS绑定。四入口均默认首位银行卡而非回退现金；W02售票/列表及W03提示默认资源不可用，填0.01确认仍禁用；W06提示当前支付方式不可用、确认回款禁用。均取消无提交。
result：通过
businessIds：
verification：W01
W02
evidence：
issueIds：PM-BUG-007
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-12
dependencies：PM-001
steps：列表行长期充值验证第一方式缺资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不自动跳现金；提示资源不可用，允许主动换其他有效方式
verification：W01
W02
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-13 待认领入款验证五种适用方式候选
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:57:06.575583+08:00
preconditions：QA TEST本轮自建G伙伴，预付款余额从0.00开始；后台西瓜／窗口YST分别操作
steps：待认领入款验证五种适用方式候选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：候选全集与后台资格取交集，无多余方式
actual：待认领W03本轮已逐项核对五种普通候选现金、扫码付、银行卡、微信、支付宝，顺序1/2/3/5/6，与后台启用场景及YST主体资格交集一致；待认领内部来源单独展示，未混入普通方式枚举。
result：通过
businessIds：
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-13
dependencies：PM-001
steps：待认领入款验证五种适用方式候选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：候选全集与后台资格取交集，无多余方式
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-14 待认领入款验证三项候选和跳号2/8/20
范围：本期必测
结果：通过
原因：R10真实回归：W03待认领新开：微信0无伙伴场景禁选，支付宝停用禁选；默认扫码2，随后银行卡3、现金20，未整页刷新。
runId：R01
executedAt：2026-11-14T03:15:06.441603+08:00
preconditions：已登记四项临时支付配置原值；扫码付2/银行卡8/现金20有效，微信1不适用当前场景，支付宝停用；整页刷新测试浏览器
steps：待认领入款验证三项候选和跳号2/8/20
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：过滤后升序，首次默认2，不固定现金
actual：后台扫码付2、银行卡8、现金20；微信1启用但仅其他场景、支付宝停用。整页刷新后，当前入口仍现金→扫码付→银行卡，首次默认现金，没有按有效排序2→8→20、默认扫码付执行。W02/W03将不适用微信及停用支付宝显示为禁选，W06不显示；失效方式均不可正常选择。本轮未以临时配置进行收款。
result：有问题
businessIds：
verification：W03
evidence：evidence/PM-BUG-007-列表充值未按有效排序默认.png
evidence/PM-BUG-007-后台支付跳号排序及场景.png
issueIds：PM-BUG-007
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：过滤后升序，首次默认2，不固定现金
actual：W03待认领新开：微信0无伙伴场景禁选，支付宝停用禁选；默认扫码2，随后银行卡3、现金20，未整页刷新。
result：通过
businessIds：
verification：W03
evidence：
issueIds：PM-BUG-007
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-14
dependencies：PM-001
steps：待认领入款验证三项候选和跳号2/8/20
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：过滤后升序，首次默认2，不固定现金
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-15 待认领入款验证其他场景更小序号
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:26:49.053888
preconditions：微信从排序5临时改0，取消合作伙伴充值/回款场景，其余场景及启用保持；完整刷新窗口
steps：正常UI保存临时配置，刷新窗口
逐一打开售票G充值、列表G充值、待认领入款及临客回款，检查默认后取消
恢复原配置并列表回查
expected：不进入本页候选、不干扰本页默认
actual：四入口均默认现金1，不被微信0干扰。售票G充值、列表G充值、待认领入款的微信禁用不可选；临客回款不列微信。配置已恢复排序5、启用及内导售票/合作伙伴充值回款/散客售票/团队售票四场景。回款仅借已有未结清订单查看弹窗后取消，未提交或修改旧订单。
result：通过
businessIds：A3618964766937858049
A3597284940257984512
DD260901151252001001s
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-15
dependencies：PM-001
steps：待认领入款验证其他场景更小序号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不进入本页候选、不干扰本页默认
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-16 待认领入款验证有效手选后重绘／仅排序变化
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:46:03.070069+08:00
preconditions：共享支付配置均为原值，G余额0.04、待认领0.04。
steps：打开对应入口
按记录手选或切页取消
回查字段、候选和保留状态
取消草稿，不提交
expected：手选仍有效时保留，不强行重置
actual：待认领入款手选微信，修改金额0.02、备注及付款人，微信仍checked、合计0.02、无现金字段；取消未提交。
result：通过
businessIds：A3597284940257984512
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-16
dependencies：PM-001
steps：待认领入款验证有效手选后重绘／仅排序变化
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：手选仍有效时保留，不强行重置
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-17 待认领入款验证手选方式失效后刷新／重开
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:56:34.739949+08:00
preconditions：列表G、待认领、临客X各自独立标签有效手选扫码资源2，正常配置。
steps：各入口手选有效扫码柜台2并填写0.01
后台停用扫码付保存
观察旧弹窗仍保留已加载选择，不记缺陷
整页刷新对应标签并重开同一业务
核对新候选及旧资源草稿；恢复扫码启用，取消所有草稿
expected：按已确认支付逻辑更新候选并清旧资源草稿
actual：停用后旧弹窗均保留已加载扫码及CCB-SK-012121212121212；刷新重开后列表G及待认领扫码禁用，临客回款候选移除扫码；均默认现金、无旧柜台编号及资源草稿，无新增提交。现扫码已恢复启用、其他原值未改，X仍未回款0.01。
result：通过
businessIds：
verification：W03
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-17
dependencies：PM-001
steps：待认领入款验证手选方式失效后刷新／重开
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按已确认支付逻辑更新候选并清旧资源草稿
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-18 待认领入款验证第一方式缺资源
范围：本期必测
结果：通过
原因：R10真实回归：首位设为银行卡sort0、设备归属无POS绑定。四入口均默认首位银行卡而非回退现金；W02售票/列表及W03提示默认资源不可用，填0.01确认仍禁用；W06提示当前支付方式不可用、确认回款禁用。均取消无提交。
runId：R01
executedAt：2026-11-14T05:00:58.847313+08:00
preconditions：扫码排序0、现金1，扫码跟窗口设备，专属YST团队设备扫码可用/默认均为空；启用四场景、多资源不变。
steps：正常保存排序和设备空绑定
整页刷新窗口
分别打开售票G充值、列表G充值、待认领入款、临客X回款
核对初始选择和资源提示
恢复设备柜台1/2默认2及全局扫码排序2跟账号
expected：不自动跳现金；提示资源不可用，允许主动换其他有效方式
actual：四入口初始均默认现金，无第一方式资源不可用提示；扫码仍列在现金之后。售票入口手动选择扫码才显示默认资源不可用并禁止确认。属于既有现金固定优先问题，导致本分支未按第一方式缺资源规则执行。未提交交易；配置均已恢复并UI回查。
result：有问题
businessIds：
verification：W03
evidence：evidence/PM-BUG-007-扫码第一缺资源仍默认现金.png
issueIds：PM-BUG-007
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：不自动跳现金；提示资源不可用，允许主动换其他有效方式
actual：首位设为银行卡sort0、设备归属无POS绑定。四入口均默认首位银行卡而非回退现金；W02售票/列表及W03提示默认资源不可用，填0.01确认仍禁用；W06提示当前支付方式不可用、确认回款禁用。均取消无提交。
result：通过
businessIds：
verification：W03
evidence：
issueIds：PM-BUG-007
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-18
dependencies：PM-001
steps：待认领入款验证第一方式缺资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不自动跳现金；提示资源不可用，允许主动换其他有效方式
verification：W03
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-19 公共临客回款验证五种适用方式候选
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:44:59.430296+08:00
preconditions：本轮I/J同客户同负责人订单各0.01，原来源POS0.02，13日支付、14日使用；QA TEST同一窗口
steps：公共临客回款验证五种适用方式候选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：候选全集与后台资格取交集，无多余方式
actual：W06普通候选现金、扫码付、银行卡、微信、支付宝，当前账号及场景与后台配置交集一致，顺序1/2/3/5/6；待认领为单独内部来源。
result：通过
businessIds：DD261114023919001001s
DD261114023950001001s
RG3618985296881532930
RG3618990794439671812
verification：W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-19
dependencies：PM-001
steps：公共临客回款验证五种适用方式候选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：候选全集与后台资格取交集，无多余方式
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-20 公共临客回款验证三项候选和跳号2/8/20
范围：本期必测
结果：通过
原因：R10真实回归：W06回款未提交，微信0不适用及支付宝停用不显示；有效扫码2/银行卡3/现金20，首次默认扫码，默认资源2号。
runId：R01
executedAt：2026-11-14T03:15:06.441603+08:00
preconditions：已登记四项临时支付配置原值；扫码付2/银行卡8/现金20有效，微信1不适用当前场景，支付宝停用；整页刷新测试浏览器
steps：公共临客回款验证三项候选和跳号2/8/20
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：过滤后升序，首次默认2，不固定现金
actual：后台扫码付2、银行卡8、现金20；微信1启用但仅其他场景、支付宝停用。整页刷新后，当前入口仍现金→扫码付→银行卡，首次默认现金，没有按有效排序2→8→20、默认扫码付执行。W02/W03将不适用微信及停用支付宝显示为禁选，W06不显示；失效方式均不可正常选择。本轮未以临时配置进行收款。
result：有问题
businessIds：DD261114031418001001s
verification：W05
W06
evidence：evidence/PM-BUG-007-列表充值未按有效排序默认.png
evidence/PM-BUG-007-后台支付跳号排序及场景.png
issueIds：PM-BUG-007
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：过滤后升序，首次默认2，不固定现金
actual：W06回款未提交，微信0不适用及支付宝停用不显示；有效扫码2/银行卡3/现金20，首次默认扫码，默认资源2号。
result：通过
businessIds：
verification：W05
W06
evidence：
issueIds：PM-BUG-007
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-20
dependencies：PM-001
steps：公共临客回款验证三项候选和跳号2/8/20
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：过滤后升序，首次默认2，不固定现金
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-21 公共临客回款验证其他场景更小序号
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:26:49.053890
preconditions：微信从排序5临时改0，取消合作伙伴充值/回款场景，其余场景及启用保持；完整刷新窗口
steps：正常UI保存临时配置，刷新窗口
逐一打开售票G充值、列表G充值、待认领入款及临客回款，检查默认后取消
恢复原配置并列表回查
expected：不进入本页候选、不干扰本页默认
actual：四入口均默认现金1，不被微信0干扰。售票G充值、列表G充值、待认领入款的微信禁用不可选；临客回款不列微信。配置已恢复排序5、启用及内导售票/合作伙伴充值回款/散客售票/团队售票四场景。回款仅借已有未结清订单查看弹窗后取消，未提交或修改旧订单。
result：通过
businessIds：A3618964766937858049
A3597284940257984512
DD260901151252001001s
verification：W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-21
dependencies：PM-001
steps：公共临客回款验证其他场景更小序号
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不进入本页候选、不干扰本页默认
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-22 公共临客回款验证有效手选后重绘／仅排序变化
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:17:33.433158+08:00
preconditions：扫码2/银行卡8/现金20及微信场景/支付宝临时资格已正常保存，随后逐项恢复
steps：公共临客回款验证有效手选后重绘／仅排序变化
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：手选仍有效时保留，不强行重置
actual：W06手选银行卡/POS-SK-02后，登记0.01→0.02显示差额再改回0.01，银行卡及POS-SK-02均保留；期间后台仅恢复排序，未在旧弹窗强制重置；取消未收款。
result：通过
businessIds：DD261114031418001001s
verification：W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-22
dependencies：PM-001
steps：公共临客回款验证有效手选后重绘／仅排序变化
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：手选仍有效时保留，不强行重置
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-23 公共临客回款验证手选方式失效后刷新／重开
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:56:34.739949+08:00
preconditions：列表G、待认领、临客X各自独立标签有效手选扫码资源2，正常配置。
steps：各入口手选有效扫码柜台2并填写0.01
后台停用扫码付保存
观察旧弹窗仍保留已加载选择，不记缺陷
整页刷新对应标签并重开同一业务
核对新候选及旧资源草稿；恢复扫码启用，取消所有草稿
expected：按已确认支付逻辑更新候选并清旧资源草稿
actual：停用后旧弹窗均保留已加载扫码及CCB-SK-012121212121212；刷新重开后列表G及待认领扫码禁用，临客回款候选移除扫码；均默认现金、无旧柜台编号及资源草稿，无新增提交。现扫码已恢复启用、其他原值未改，X仍未回款0.01。
result：通过
businessIds：DD261114045301002001s
verification：W05
W06
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-23
dependencies：PM-001
steps：公共临客回款验证手选方式失效后刷新／重开
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：按已确认支付逻辑更新候选并清旧资源草稿
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

### PM-026-24 公共临客回款验证第一方式缺资源
范围：本期必测
结果：通过
原因：R10真实回归：首位设为银行卡sort0、设备归属无POS绑定。四入口均默认首位银行卡而非回退现金；W02售票/列表及W03提示默认资源不可用，填0.01确认仍禁用；W06提示当前支付方式不可用、确认回款禁用。均取消无提交。
runId：R01
executedAt：2026-11-14T05:00:58.847313+08:00
preconditions：扫码排序0、现金1，扫码跟窗口设备，专属YST团队设备扫码可用/默认均为空；启用四场景、多资源不变。
steps：正常保存排序和设备空绑定
整页刷新窗口
分别打开售票G充值、列表G充值、待认领入款、临客X回款
核对初始选择和资源提示
恢复设备柜台1/2默认2及全局扫码排序2跟账号
expected：不自动跳现金；提示资源不可用，允许主动换其他有效方式
actual：四入口初始均默认现金，无第一方式资源不可用提示；扫码仍列在现金之后。售票入口手动选择扫码才显示默认资源不可用并禁止确认。属于既有现金固定优先问题，导致本分支未按第一方式缺资源规则执行。未提交交易；配置均已恢复并UI回查。
result：有问题
businessIds：DD261114045301002001s
verification：W05
W06
evidence：evidence/PM-BUG-007-扫码第一缺资源仍默认现金.png
issueIds：PM-BUG-007
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：不自动跳现金；提示资源不可用，允许主动换其他有效方式
actual：首位设为银行卡sort0、设备归属无POS绑定。四入口均默认首位银行卡而非回退现金；W02售票/列表及W03提示默认资源不可用，填0.01确认仍禁用；W06提示当前支付方式不可用、确认回款禁用。均取消无提交。
result：通过
businessIds：
verification：W05
W06
evidence：
issueIds：PM-BUG-007
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：使用专属测试绑定及当前有效配置；W06另需本轮未结清临客订单，W03须待认领账户。
dataIds：D-01
D-04
D-05
sampleKey：QA-PM-20261111-PM-026-24
dependencies：PM-001
steps：公共临客回款验证第一方式缺资源
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-PAY的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：不自动跳现金；提示资源不可用，允许主动换其他有效方式
verification：W05
W06
protocolId：P-PAY
checkpoints：当前弹窗→配置来源/本次主体→完成后W13/B08及适用收入详情
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：增补20号 W01
path：../development-spec.html#W01
label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
label：增补20号 W05
path：../development-spec.html#W05

## PM-027 资源快照稳定性与跨主体来源使用
模块：后台与记录
预期：新单快照不因当前主数据变化回写；来源付款保留原入款快照，不再次收款
当前：通过

### PM-027-01 扫码付新单完成后改资源名称并查原充值及收入详情
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:30:57.490718
preconditions：本轮U/V原充值、目标充值与公司收入已完成
steps：先仅改资源名称，查原充值及收入
再改资源编号，查前后台详情与W16
恢复原名原编号并逐行回查
expected：单号、原方式资源名称编号保持，前导零不丢；关联报表仍按原快照；记录页面可见字段不宣称直查数据库
actual：两个资源先仅改名，前台原充值及收入仍显示原名称；再改编号为000QA1114SNAPSCAN及000QA1114SNAPPOS，前台U原充值/收入、V原充值/目标充值/收入保持原名称和CCB-SK-012121212121212、POS-SK-02；后台B08/B10保持原编号，后台无资源名称字段。W16重新进入仍原动态列，含000QA1103POS01前导零，总计300.17，未出现临时编号。两个资源名称编号已全部恢复并逐行回查，启用及绑定不变。
result：通过
businessIds：RG3619071866242351106
RG3619085867835736068
RG3619072244199473154
RG3619087757621346308
RG3619087757621346310
verification：W13
W15
B08
B10
W16
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮扫码/POS成功交易单号及原资源快照已记录；仅变更专属测试资源，甲乙绑定不同且可恢复。来源付款另备本轮成功未用来源。
dataIds：D-01
D-05
D-07
sampleKey：QA-PM-20261111-PM-027-01
dependencies：PM-005
PM-007
steps：扫码付新单完成后改资源名称并查原充值及收入详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：单号、原方式资源名称编号保持，前导零不丢；关联报表仍按原快照；记录页面可见字段不宣称直查数据库
verification：W13
W15
B08
B10
W16
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-027-02 扫码付新单完成后改编号并查原充值及收入详情
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:30:57.490722
preconditions：本轮U/V原充值、目标充值与公司收入已完成
steps：先仅改资源名称，查原充值及收入
再改资源编号，查前后台详情与W16
恢复原名原编号并逐行回查
expected：单号、原方式资源名称编号保持，前导零不丢；关联报表仍按原快照；记录页面可见字段不宣称直查数据库
actual：两个资源先仅改名，前台原充值及收入仍显示原名称；再改编号为000QA1114SNAPSCAN及000QA1114SNAPPOS，前台U原充值/收入、V原充值/目标充值/收入保持原名称和CCB-SK-012121212121212、POS-SK-02；后台B08/B10保持原编号，后台无资源名称字段。W16重新进入仍原动态列，含000QA1103POS01前导零，总计300.17，未出现临时编号。两个资源名称编号已全部恢复并逐行回查，启用及绑定不变。
result：通过
businessIds：RG3619071866242351106
RG3619085867835736068
RG3619072244199473154
RG3619087757621346308
RG3619087757621346310
verification：W13
W15
B08
B10
W16
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮扫码/POS成功交易单号及原资源快照已记录；仅变更专属测试资源，甲乙绑定不同且可恢复。来源付款另备本轮成功未用来源。
dataIds：D-01
D-05
D-07
sampleKey：QA-PM-20261111-PM-027-02
dependencies：PM-005
PM-007
steps：扫码付新单完成后改编号并查原充值及收入详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：单号、原方式资源名称编号保持，前导零不丢；关联报表仍按原快照；记录页面可见字段不宣称直查数据库
verification：W13
W15
B08
B10
W16
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-027-03 扫码付新单完成后解绑该测试资源并查原充值及收入详情
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:22:19.430Z
preconditions：系统角色内YST账号原扫码1/2默认2、POS02+R01默认POS02已记录
steps：解绑账号扫码2和POS02保存重开确认
查询U/V原充值和关联收入，后台原单互查
恢复原绑定及默认，重开确认并查询W16
expected：单号、原方式资源名称编号保持，前导零不丢；关联报表仍按原快照；记录页面可见字段不宣称直查数据库
actual：解绑后W13原充值U/V、W15其他收入仍保留原扫码2名称及CCB-SK-012121212121212、散客POS-02及POS-SK-02；B08原单保留原编号、申请人和售票窗口。恢复原全部绑定及默认后W16仍保留原动态资源列及前导零，总额300.26未变。后台原单无资源名称字段；未直查数据库。本批未新增财务单据。
result：通过
businessIds：RG3619071866242351106
RG3619072244199473154
RG3619085867835736068
RG3619087757621346310
verification：W13
W15
B08
W16
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮扫码/POS成功交易单号及原资源快照已记录；仅变更专属测试资源，甲乙绑定不同且可恢复。来源付款另备本轮成功未用来源。
dataIds：D-01
D-05
D-07
sampleKey：QA-PM-20261111-PM-027-03
dependencies：PM-005
PM-007
steps：扫码付新单完成后解绑该测试资源并查原充值及收入详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：单号、原方式资源名称编号保持，前导零不丢；关联报表仍按原快照；记录页面可见字段不宣称直查数据库
verification：W13
W15
B08
B10
W16
B12
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-027-04 银行卡新单完成后改资源名称并查原充值及收入详情
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:30:57.490725
preconditions：本轮U/V原充值、目标充值与公司收入已完成
steps：先仅改资源名称，查原充值及收入
再改资源编号，查前后台详情与W16
恢复原名原编号并逐行回查
expected：单号、原方式资源名称编号保持，前导零不丢；关联报表仍按原快照；记录页面可见字段不宣称直查数据库
actual：两个资源先仅改名，前台原充值及收入仍显示原名称；再改编号为000QA1114SNAPSCAN及000QA1114SNAPPOS，前台U原充值/收入、V原充值/目标充值/收入保持原名称和CCB-SK-012121212121212、POS-SK-02；后台B08/B10保持原编号，后台无资源名称字段。W16重新进入仍原动态列，含000QA1103POS01前导零，总计300.17，未出现临时编号。两个资源名称编号已全部恢复并逐行回查，启用及绑定不变。
result：通过
businessIds：RG3619071866242351106
RG3619085867835736068
RG3619072244199473154
RG3619087757621346308
RG3619087757621346310
verification：W13
W15
B08
B10
W16
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮扫码/POS成功交易单号及原资源快照已记录；仅变更专属测试资源，甲乙绑定不同且可恢复。来源付款另备本轮成功未用来源。
dataIds：D-01
D-05
D-07
sampleKey：QA-PM-20261111-PM-027-04
dependencies：PM-005
PM-007
steps：银行卡新单完成后改资源名称并查原充值及收入详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：单号、原方式资源名称编号保持，前导零不丢；关联报表仍按原快照；记录页面可见字段不宣称直查数据库
verification：W13
W15
B08
B10
W16
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-027-05 银行卡新单完成后改编号并查原充值及收入详情
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T04:30:57.490727
preconditions：本轮U/V原充值、目标充值与公司收入已完成
steps：先仅改资源名称，查原充值及收入
再改资源编号，查前后台详情与W16
恢复原名原编号并逐行回查
expected：单号、原方式资源名称编号保持，前导零不丢；关联报表仍按原快照；记录页面可见字段不宣称直查数据库
actual：两个资源先仅改名，前台原充值及收入仍显示原名称；再改编号为000QA1114SNAPSCAN及000QA1114SNAPPOS，前台U原充值/收入、V原充值/目标充值/收入保持原名称和CCB-SK-012121212121212、POS-SK-02；后台B08/B10保持原编号，后台无资源名称字段。W16重新进入仍原动态列，含000QA1103POS01前导零，总计300.17，未出现临时编号。两个资源名称编号已全部恢复并逐行回查，启用及绑定不变。
result：通过
businessIds：RG3619071866242351106
RG3619085867835736068
RG3619072244199473154
RG3619087757621346308
RG3619087757621346310
verification：W13
W15
B08
B10
W16
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮扫码/POS成功交易单号及原资源快照已记录；仅变更专属测试资源，甲乙绑定不同且可恢复。来源付款另备本轮成功未用来源。
dataIds：D-01
D-05
D-07
sampleKey：QA-PM-20261111-PM-027-05
dependencies：PM-005
PM-007
steps：银行卡新单完成后改编号并查原充值及收入详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：单号、原方式资源名称编号保持，前导零不丢；关联报表仍按原快照；记录页面可见字段不宣称直查数据库
verification：W13
W15
B08
B10
W16
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-027-06 银行卡新单完成后解绑该测试资源并查原充值及收入详情
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:22:19.430Z
preconditions：系统角色内YST账号原扫码1/2默认2、POS02+R01默认POS02已记录
steps：解绑账号扫码2和POS02保存重开确认
查询U/V原充值和关联收入，后台原单互查
恢复原绑定及默认，重开确认并查询W16
expected：单号、原方式资源名称编号保持，前导零不丢；关联报表仍按原快照；记录页面可见字段不宣称直查数据库
actual：解绑后W13原充值U/V、W15其他收入仍保留原扫码2名称及CCB-SK-012121212121212、散客POS-02及POS-SK-02；B08原单保留原编号、申请人和售票窗口。恢复原全部绑定及默认后W16仍保留原动态资源列及前导零，总额300.26未变。后台原单无资源名称字段；未直查数据库。本批未新增财务单据。
result：通过
businessIds：RG3619071866242351106
RG3619072244199473154
RG3619085867835736068
RG3619087757621346310
verification：W13
W15
B08
W16
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮扫码/POS成功交易单号及原资源快照已记录；仅变更专属测试资源，甲乙绑定不同且可恢复。来源付款另备本轮成功未用来源。
dataIds：D-01
D-05
D-07
sampleKey：QA-PM-20261111-PM-027-06
dependencies：PM-005
PM-007
steps：银行卡新单完成后解绑该测试资源并查原充值及收入详情
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：单号、原方式资源名称编号保持，前导零不丢；关联报表仍按原快照；记录页面可见字段不宣称直查数据库
verification：W13
W15
B08
B10
W16
B12
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-027-07 乙当前绑定与甲不同，来源用于长期充值
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:42:37.732Z
preconditions：顺序正常登录第二测试角色，分别核对当前账号、窗口及不同支付绑定；结束恢复YST。
steps：乙当前绑定与甲不同，来源用于长期充值
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只用甲原入款方式资源编号快照，乙不再次扫码；保存当前操作身份但不覆盖来源快照
actual：乙hjk001绑定扫码1/CCB-SK-011、银行POS-SK-01，与甲不同；使用甲历史来源RG3619106157261242370 0.01充值G，未再次扫码。转出RG3619665516622004226、目标RG3619665516622004228均保留甲原资源2与历史编号000QA1114SCANZERO，当前applicant/sales为乙、窗口测试的设备。G余额0.04→0.05，共享450.07→450.06；B05及W13回查一致。
result：通过
businessIds：RG3619106157261242370
RG3619665516622004226
RG3619665516622004228
verification：W02
W13
B08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮扫码/POS成功交易单号及原资源快照已记录；仅变更专属测试资源，甲乙绑定不同且可恢复。来源付款另备本轮成功未用来源。
dataIds：D-01
D-05
D-07
sampleKey：QA-PM-20261111-PM-027-07
dependencies：PM-005
PM-007
steps：乙当前绑定与甲不同，来源用于长期充值
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只用甲原入款方式资源编号快照，乙不再次扫码；保存当前操作身份但不覆盖来源快照
verification：W02
W13
B08
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-027-08 乙当前绑定与甲不同，来源用于临客回款
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T05:42:37.732Z
preconditions：顺序正常登录第二测试角色，分别核对当前账号、窗口及不同支付绑定；结束恢复YST。
steps：乙当前绑定与甲不同，来源用于临客回款
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只用甲原入款方式资源编号快照，乙不再次扫码；保存当前操作身份但不覆盖来源快照
actual：乙当前扫码1/银行1，使用甲原扫码2来源250结清临客200并收入50，未再次扫码。原来源仍记录甲及原支付日/窗口，转出/目标/收入保留原CCB-SK-012121212121212快照，当前身份hjk001及窗口测试的设备，前后台与报表一致。负责人空白计入既有BUG003，不影响此分支资源快照判断。
result：通过
businessIds：RG3619661341913792514
RG3619664726348021762
RG3619664726348021764
RG3619664726348021766
verification：W06
W13
B08
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：本轮扫码/POS成功交易单号及原资源快照已记录；仅变更专属测试资源，甲乙绑定不同且可恢复。来源付款另备本轮成功未用来源。
dataIds：D-01
D-05
D-07
sampleKey：QA-PM-20261111-PM-027-08
dependencies：PM-005
PM-007
steps：乙当前绑定与甲不同，来源用于临客回款
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-RECORD的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：只用甲原入款方式资源编号快照，乙不再次扫码；保存当前操作身份但不覆盖来源快照
verification：W06
W13
B08
protocolId：P-RECORD
checkpoints：记录列表筛选→同号详情→前后台互查→导出内容→适用账户/流水
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W02
path：../development-spec.html#W02
label：增补20号 W03
path：../development-spec.html#W03
label：增补20号 W06
path：../development-spec.html#W06
label：增补20号 W13
path：../development-spec.html#W13
label：增补20号 W15
path：../development-spec.html#W15
label：增补20号 B08
path：../development-spec.html#B08
label：增补20号 B10
path：../development-spec.html#B10
label：增补20号 W16
path：../development-spec.html#W16
label：增补20号 B12
path：../development-spec.html#B12
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

## PM-028 伙伴售票支付候选及账户锁定的必要联动
模块：档案与账户
预期：仅回归本次共用支付与充值入口影响，不重做售票字段/下单流程
当前：通过

### PM-028-01 选择长期挂帐伙伴核对售票付款候选
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:11:47.094573+08:00
preconditions：本轮SHORT未用来源0.01，已有启用挂帐伙伴作目标；不以旧历史记录作缺陷依据
steps：选择长期挂帐伙伴核对售票付款候选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：长期锁定伙伴默认账户、临客固定挂帐；不出现扫码/POS资源，不因普通支付排序切账户
actual：售票选择个人1104（正常已有挂帐前置），付款下拉disabled固定挂帐、无扫码/POS资源。W02账户A3605087521446051840挂帐，与伙伴默认一致。
result：通过
businessIds：RG3618960111193309186
RG3619019003784871938
RG3619019003784871940
A3605087521446051840
verification：W00
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
dataIds：D-01
D-04
sampleKey：QA-PM-20261111-PM-028-01
dependencies：
steps：选择长期挂帐伙伴核对售票付款候选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：长期锁定伙伴默认账户、临客固定挂帐；不出现扫码/POS资源，不因普通支付排序切账户
verification：W00
protocolId：P-READ
checkpoints：页面字段和操作可见性
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-028-02 选择长期预付款伙伴核对售票付款候选
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T03:01:31.568752+08:00
preconditions：本轮自建G，原启用且余额0.02；仅目标有效性变更，不修改支付配置
steps：选择长期预付款伙伴核对售票付款候选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：长期锁定伙伴默认账户、临客固定挂帐；不出现扫码/POS资源，不因普通支付排序切账户
actual：选择本轮G长期预付款伙伴，余额0.02，付款组合框disabled且仅预付款；无扫码/POS收款资源，售票充值入口仍可用。此项仅账户候选联动只读核验，未新增订单。
result：通过
businessIds：P3618964766937858048
A3618964766937858049
verification：W00
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
dataIds：D-01
D-04
sampleKey：QA-PM-20261111-PM-028-02
dependencies：
steps：选择长期预付款伙伴核对售票付款候选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：长期锁定伙伴默认账户、临客固定挂帐；不出现扫码/POS资源，不因普通支付排序切账户
verification：W00
protocolId：P-READ
checkpoints：页面字段和操作可见性
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-028-03 选择公共临客核对售票付款候选
范围：本期必测
结果：通过
原因：
runId：R01
executedAt：2026-11-14T02:50:47.992971+08:00
preconditions：本轮K两票0.02，独立QA标签正常退一票0.01；旧回款弹窗保留退款前0.02
steps：选择公共临客核对售票付款候选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：长期锁定伙伴默认账户、临客固定挂帐；不出现扫码/POS资源，不因普通支付排序切账户
actual：多次本轮公共临客售票（I/J/K）均固定挂帐，付款选择禁改，不出现扫码/POS资源，不被普通五种支付排序改成其他账户；出票后原挂帐消费留存。
result：通过
businessIds：DD261114024642001001s
LYAS3618996377808863232
RG3618997391509438466
RG3618997391509438468
verification：W00
evidence：
issueIds：
执行设计（非执行结果）：
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
dataIds：D-01
D-04
sampleKey：QA-PM-20261111-PM-028-03
dependencies：
steps：选择公共临客核对售票付款候选
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：长期锁定伙伴默认账户、临客固定挂帐；不出现扫码/POS资源，不因普通支付排序切账户
verification：W00
protocolId：P-READ
checkpoints：页面字段和操作可见性
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-028-04 长期目标的默认账户方式停用后刷新重开
范围：本期必测
结果：通过
原因：R10真实回归：后台确认预付款停用false；全刷新并重选AA(余额0.07)，0.01商品仍显示预付款并可进确认，但最终确认出票被“当前支付方式不可用，请重新选择”阻止，无新订单。另一移除长期场景分支继续。
runId：R01
executedAt：2026-11-14T04:43:59.684924+08:00
preconditions：本轮自建G默认预付，原余额0.06；各配置保存后整页刷新重选。
steps：保存预付款对应失效配置
整页刷新售票并选择G
选择0.01非实名测试票、填写姓名
确认下单和出票
回查新订单号；恢复预付款排序7、启用和原三场景
expected：提示不可用，不自动换另一账户；恢复配置后回查
actual：预付款全局停用后，整页刷新并重选G，仍锁定预付款且未提示不可用；0.01正常提交成功出票DD261114044230001001s。 配置现已恢复原值并UI回查。
result：有问题
businessIds：DD261114044230001001s
verification：W00
evidence：evidence/PM-BUG-009-预付款停用仍出票.png
evidence/PM-BUG-009-后台预付款已停用.png
issueIds：PM-BUG-009
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：提示不可用，不自动换另一账户；恢复配置后回查
actual：后台确认预付款停用false；全刷新并重选AA(余额0.07)，0.01商品仍显示预付款并可进确认，但最终确认出票被“当前支付方式不可用，请重新选择”阻止，无新订单。另一移除长期场景分支继续。
result：通过
businessIds：
verification：W00
evidence：
issueIds：PM-BUG-009
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
dataIds：D-01
D-04
sampleKey：QA-PM-20261111-PM-028-04
dependencies：
steps：长期目标的默认账户方式停用后刷新重开
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示不可用，不自动换另一账户；恢复配置后回查
verification：W00
protocolId：P-READ
checkpoints：页面字段和操作可见性
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md

### PM-028-05 长期目标的默认账户方式取消适用场景后刷新重开
范围：本期必测
结果：通过
原因：R10真实回归：预付款启用但移除长期合作伙伴，刷新重选AA后仍显示预付款，但最终出票被“当前支付方式不可用，请重新选择”阻止，无新订单，未回退现金。两失效分支均有提交保护。
runId：R01
executedAt：2026-11-14T04:43:59.684924+08:00
preconditions：本轮自建G默认预付，原余额0.06；各配置保存后整页刷新重选。
steps：保存预付款对应失效配置
整页刷新售票并选择G
选择0.01非实名测试票、填写姓名
确认下单和出票
回查新订单号；恢复预付款排序7、启用和原三场景
expected：提示不可用，不自动换另一账户；恢复配置后回查
actual：预付款启用但取消长期合作伙伴场景后，整页刷新并重选G，仍锁定预付款且未提示不可用；0.01正常提交成功出票DD261114044316001001s。 配置现已恢复原值并UI回查。
result：有问题
businessIds：DD261114044316001001s
verification：W00
evidence：evidence/PM-BUG-009-取消长期场景仍出票.png
evidence/PM-BUG-009-后台无长期场景.png
issueIds：PM-BUG-009
runId：R10
executedAt：2026-11-27
preconditions：独立HTTP Chrome测试窗口；后台西瓜、YST售票窗口/YST团队售票窗口；实际部署版本未显示。配置变更及恢复见R10原始记录。
steps：按原问题入口复现及正常结果回查；本次具体执行内容见actual及R10逐项记录。
expected：提示不可用，不自动换另一账户；恢复配置后回查
actual：预付款启用但移除长期合作伙伴，刷新重选AA后仍显示预付款，但最终出票被“当前支付方式不可用，请重新选择”阻止，无新订单，未回退现金。两失效分支均有提交保护。
result：通过
businessIds：
verification：W00
evidence：
issueIds：PM-BUG-009
record：R10-20261127-开发修复回归.md
执行设计（非执行结果）：
preconditions：管理员或收银身份已核验；待认领唯一对象若已存在，创建分支先记录不可重复创建的环境前提，不删共享档案。
dataIds：D-01
D-04
sampleKey：QA-PM-20261111-PM-028-05
dependencies：
steps：长期目标的默认账户方式取消适用场景后刷新重开
检查本分支适用字段：存在、容器顺序、显示条件、默认格式、保存回显、正常错误/取消状态。
按P-READ的适用位置回查；交易记录前后金额/状态及实际单号，刷新后再查；只读项不制造交易。
expected：提示不可用，不自动换另一账户；恢复配置后回查
verification：W00
protocolId：P-READ
checkpoints：页面字段和操作可见性
restoration：配置变更前登记原值；结束恢复后按支付刷新/重开回查。真实业务单据保留追溯；查询/取消核验无写入，不用删账或人工调账抹平。
exitCriteria：具体预期全部满足、适用回查点刷新后保持、临时配置已恢复；任何未查点明确受限，不能凭成功提示判全通过。
ruleRefs：label：增补20号 W00
path：../development-spec.html#W00
label：支付统一确认（2026-11-11）
path：2026-11-11-支付逻辑统一确认与开发协同问题.md
