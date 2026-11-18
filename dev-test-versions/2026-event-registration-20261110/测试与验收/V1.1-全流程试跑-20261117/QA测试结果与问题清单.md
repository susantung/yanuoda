# 赛事活动报名｜后台与小程序全流程验收｜QA测试结果与问题清单

## 当前状态
{
  "cases": 28,
  "variants": 65,
  "results": {
    "通过": 28,
    "有问题": 8,
    "阻塞": 25,
    "未跑": 3
  },
  "scope": {
    "本期必测": 64,
    "后续验证": 1
  },
  "parentResults": {
    "通过": 6,
    "有问题": 8,
    "阻塞": 13,
    "后续验证": 1
  },
  "issues": {
    "当前缺陷": 8
  }
}

本轮与累计以轮次和分支记录区分；全部执行不等于全部通过。

## 统一问题池

### EVT-QA-001 单次报名人数11人仍可保存
module：人数与门票
type：已确认缺陷
severity：P1
status：当前缺陷
cases：B04-01
pages：B07
entry：项目31 / 报名人数
flow：配置→游客
preconditions：QA专用赛事24
steps：新建免费免签项目
单次人数填11，总名额22
完成后回列表并重新编辑人数步骤
expected：单次报名人数仅允许1至10正整数
actual：保存成功，列表及重新编辑均回显11人
impact：可建立超过已确认单次10人限制的项目
evidence：path：资源准备/单次人数11人可保存.jpg
label：查看问题截图：单次人数11人可保存
资源准备/单次人数11人可保存.txt
restoration：已恢复项目31为1人、名额10人并列表确认
retest：
resolution：
triage：已确认与方案不符
owner：开发修复，Codex沿原样本回归
screenshotStatus：有实际截图；001/003/004为原执行现场，002/005/006为本次补拍
technicalEvidence：资源准备/单次人数11人可保存.txt

### EVT-QA-002 推广路径已恢复，但小程序码获取失败
module：赛事配置
type：配置待核实
severity：P2
status：当前缺陷
cases：B01-02
pages：B01
entry：赛事24 / 推广
flow：配置→游客
preconditions：QA专用赛事24
steps：赛事列表点击本轮赛事推广
expected：能获取绑定赛事的真实路径或码
actual：新版后台两种推广的小程序/H5路径已生成，绑定activityId24；小程序码页提示获取太阳码失败，下载禁用。公开查询可经独立编译验证。
impact：阻塞推广入口验收；开发者工具编译参数可直达
evidence：path：资源准备/赛事推广码获取失败-新版.png
label：新版实际：太阳码获取失败
path：资源准备/查询推广路径已恢复.png
label：新版实际：查询推广路径已恢复
path：资源准备/推广路径未配置.png
label：查看问题截图：推广路径未配置
资源准备/赛事推广入口未配置.txt
restoration：未更改系统推广配置，待补配置后复测
retest：2026-11-18 14:00:59：路径部分恢复，太阳码仍失败；未判定根因。
resolution：待核实：页面明确提示推广页面未配置；未证明是业务代码缺陷。无需用户逐张配置测试票。
triage：配置待核实
owner：Codex先检查已有推广配置入口；需权限或平台设置时再请用户协调
screenshotStatus：有实际截图；001/003/004为原执行现场，002/005/006为本次补拍
technicalEvidence：资源准备/赛事推广入口未配置.txt

### EVT-QA-003 短信模板弹窗仍显示已要求移除的字数统计
module：短信通知
type：已确认缺陷
severity：P3
status：当前缺陷
cases：S01-02
pages：B12
entry：赛事24 / 短信通知 / 新增模板
flow：模板配置
preconditions：打开模板配置弹窗
steps：打开新增模板
观察模板内容下方
expected：按用户明确确认不显示字数统计
actual：空内容显示0/2000，插入参数后显示20/2000
impact：与已确认交互要求不一致，不影响本轮模板保存
evidence：path：资源准备/短信模板仍显示字数统计.jpg
label：查看问题截图：短信模板仍显示字数统计
资源准备/延期模板保存重开回显.txt
restoration：只在新建隔离赛事24保存QA延期模板；没有发短信
retest：
resolution：
triage：已确认与方案不符
owner：开发修复，Codex沿原样本回归
screenshotStatus：有实际截图；001/003/004为原执行现场，002/005/006为本次补拍
technicalEvidence：资源准备/延期模板保存重开回显.txt

### EVT-QA-004 已成功报名后首页报名入口仍打开空白可编辑表单
module：小程序报名入口
type：已确认缺陷
severity：P1
status：当前缺陷
cases：C09-02
pages：C01/C03/K06
entry：开发者工具赛事24首页项目31报名
flow：成功后再次报名
preconditions：同一微信账号在项目31存在成功记录66（免费验收甲）。
steps：重编译进入赛事24首页
点QA单人免费免签下的报名
对比我的报名→查看资料
expected：恢复原成功记录及资料，只读查看，不重新填一份。
actual：首页报名进入姓名空白且有暂存/立即报名按钮；我的报名查看资料可见免费验收甲且只读。
impact：用户可能重新填写或创建重复记录；本次未再次提交。
evidence：path：资源准备/成功后首页报名仍空表单-新版.png
label：最新代码回归：成功后首页仍为空表单
path：资源准备/成功后首页报名仍进入空表单.png
label：查看问题截图：成功后首页报名仍进入空表单
资源准备/成功后首页报名仍进入空表单.txt
资源准备/最新代码回归1118.txt
restoration：未修改或提交该空表单，重新编译离开。
retest：2026-11-18 14:00:59：1ff63a8e下成功66从首页再次报名仍为空表单，未重复提交。
resolution：未处理
triage：已确认与方案不符
owner：开发修复，Codex沿原样本回归
screenshotStatus：有实际截图；001/003/004为原执行现场，002/005/006为本次补拍
technicalEvidence：资源准备/成功后首页报名仍进入空表单.txt
资源准备/最新代码回归1118.txt

### EVT-QA-005 单日比赛候选取到当天报价却提示无可售交集
module：关联门票
type：待定位异常
severity：P2
status：当前缺陷
cases：T01-02
pages：B08
entry：赛事24项目35关联门票候选132954
flow：单日比赛匹配日历票
preconditions：项目35比赛11/25，报名11/17—11/25；原票132954当天报价0.03库存100、立即预约、当日提前0小时。
steps：查看原票日历11/25及预订规则
项目35选择单日11/25并进入关联候选
查看日历票价格库存和禁选原因
expected：有当天报价且存在时间交集时可选；若存在其他限制应显示可定位的原因。
actual：候选取价0.03、库存100，却提示没有可售交集并禁选；根因尚未定位，不能排除其他票务规则影响。
impact：该日历票正向关联未跑通，单日价格分支不能通过。
evidence：path：资源准备/日历票有报价却无交集.png
label：查看问题截图：日历票有报价却无交集
资源准备/单日日历报价03但无交集.txt
资源准备/日历票原始预订规则.txt
资源准备/日历票1125报价03与1126缺价原配置.txt
restoration：未新增关联，项目35仍为132948，比赛11/25、名额4，原票已上架。
retest：复核原票完整预约/销售时间、时区与日期、上下架及比赛日；用正常购票链路对照同一原票可售情况，再判定配置问题还是匹配异常。无需用户先改票。
resolution：待定位，不直接认定程序Bug。测试票由本轮建立，先排查自身配置。
triage：配置或程序原因待验证
owner：Codex先复核测试票与时间交集；仍不符合时交开发
screenshotStatus：有实际截图；001/003/004为原执行现场，002/005/006为本次补拍
technicalEvidence：资源准备/单日日历报价03但无交集.txt
资源准备/日历票原始预订规则.txt
资源准备/日历票1125报价03与1126缺价原配置.txt

### EVT-QA-006 收费报名提交被原票校验拒绝且未返回可定位原因
module：收费报名与原票下单
type：待定位异常
triage：配置、资料映射或程序原因待验证
severity：P1
status：当前缺陷
cases：C06-01
pages：C06/B08/原票下单
entry：赛事24／项目32／报名67／原票132935
flow：收费统一提交→原票校验→订单
preconditions：QA双人无证件收费项目，关联不收集游客资料票132935；两位姓名已填，无手机号。
steps：两位姓名完整后统一提交
查看失败提示及本次业务返回
后台回查报名67和订单字段
expected：满足原票规则时创建同一原订单并进入付款；不满足规则应给出可定位原因。
actual：提交返回READY、submitState FAILED、paymentLink null，提示原票下单校验未通过；后台待提交0/4，无订单。traceId 96d2cec1527ca53a89afa39df638f339。尚未定位原票规则、参数映射还是程序问题。 本次沿原记录67再提交仍出现同一提示，未到支付；本次traceId 3289fdb405d3c119d8a8e9d4dca056ae，已补游客界面截图。
impact：收费链路在支付前中断；阻塞待付、取消订单、成功支付、退款和有单票锁定等后续用例。不是用户未付款导致。
evidence：path：资源准备/收费提交新版回归.png
label：最新代码收费提交回归界面
path：资源准备/收费失败提示-游客界面.png
label：查看问题截图：收费失败提示-游客界面
资源准备/收费提交67业务返回.txt
资源准备/收费提交67后台回查.txt
资源准备/无证件收费下单失败.txt
资源准备/最新代码回归1118.txt
restoration：保留报名67；未重复提交、未付款，未用未知历史订单代替。
owner：Codex先核对两端原票配置与正常购票链路；必要时开发按traceId定位
retest：2026-11-18 14:00:59：1ff63a8e下仍原票校验失败，traceId28d6feafceeea42d63eda8f4b07f42b1。未到实际支付。
resolution：待定位异常，未直接认定程序Bug。无需用户先支付或盲改票。
screenshotStatus：有实际截图；001/003/004为原执行现场，002/005/006为本次补拍
technicalEvidence：资源准备/收费提交67业务返回.txt
资源准备/收费提交67后台回查.txt
资源准备/无证件收费下单失败.txt
资源准备/最新代码回归1118.txt

### EVT-QA-007 单行文本配置50字但游客端仅允许15字
module：资料暂存
type：已确认缺陷
severity：P2
status：当前缺陷
cases：B03
C03
pages：B05/C03/B10
entry：QA赛事24 / 项目35 / QA短文本
flow：字段配置→游客填写→暂存→后台详情
preconditions：QA短文本配置最多50字；记录71，无真实联系方式。
steps：后台配置QA短文本最多50字并完成
首页进入项目35，在该输入框粘贴51个A
暂存后打开后台报名详情核对
expected：允许填写至配置上限50字；第51字才被截断或提示。
actual：游客输入框仅保留15个A，后台记录71详情也仅保存AAAAAAAAAAAAAAA。
impact：单行资料项无法按配置收集16—50字内容。
evidence：path：资源准备/短文本配置50实际仅保存15.png
label：查看问题截图：短文本实际仅保存15字
资源准备/短文本配置50实际仅保存15.txt
path：资源准备/短文本配置上限50.png
label：后台配置：短文本上限50
restoration：只在专用项目35保留QA暂存记录71；手机号/身份证错误样本已清空，没有有效订单。
retest：修复后用16、50、51字分别验证输入和暂存回显。
resolution：

### EVT-QA-008 关联原票下架后仍展示报名项且显示零元
module：游客首页
type：已确认缺陷
severity：P2
status：当前缺陷
cases：T02-03
C01-02
pages：C01
entry：赛事24 → QA日期字段核验
flow：原票状态→游客报名项
preconditions：项目35关联已上架132948，报名窗口11/17—25。
steps：在散客票中查询132948并下架
重新编译赛事24首页
滚动到QA日期字段核验
expected：原关联票下架后游客端隐藏该报名项。
actual：132948原票下架后，项目35原关联项仍显示“暂不可报名”及¥0.00/2人，未按方案隐藏。重新上架后恢复可用。候选无交集禁选及后台下架原因与完成拦截此前已验证。
impact：无效报名项残留且价格显示为零，误导游客。
evidence：资源准备/关联票下架仍展示零元.png
资源准备/关联票下架仍展示零元.txt
restoration：132948已恢复上架；项目35报名窗口已恢复11/17—25。
retest：修复后重新下架回归并恢复。
resolution：待开发修复。

## 环境与阻塞
id：BLK-1118-PAY
title：出单后实际支付需要用户接手
status：当前
caseIds：C06
C07
R01
R02
actual：本轮没有实际支付或退款；收费记录67尚未生成订单，用户夜间无法支持实际付款。
impact：收费付款成功、退款及相应人数/海报联动尚未验证
recovery：先解除EVT-QA-006。实际生成待付订单后，Codex再通知用户接手微信支付；当前无需付款。
evidence：资源准备/收费失败提示-游客界面.png
执行记录-20261118.md
category：后续需要用户配合
id：BLK-1118-ORDER
title：免资料票收费提交被原票校验拒绝，未产生订单
status：当前
caseIds：C06-01
C07-01
C07-02
C07-03
actual：最新代码下报名67仍提示原票下单校验未通过，traceId28d6feafceeea42d63eda8f4b07f42b1，无付款。
impact：待付款、取消支付、关闭原订单及有单关联票分支尚无样本。不是支付手动确认阻塞。
recovery：Codex先核对两端票规则与正常购票链路，若配置正确仍失败，交开发按traceId定位。无需用户先支付或盲改票。
evidence：资源准备/收费失败提示-游客界面.png
资源准备/收费提交67业务返回.txt
资源准备/收费提交67后台回查.txt
category：上游待定位异常
issueIds：EVT-QA-006
id：BLK-1118-NATIVE
title：原生应用窗口无法读取
status：已解除
caseIds：C01-01
C01-02
C01-03
C03-03
C09-01
B05-02
T02-03
B02-02
X02-01
actual：本次原生窗口恢复可读取；沿报名67补拍失败现场，设备已恢复iPhone12/13(Pro)390宽、75%。
impact：原阻塞已解除；模拟器390宽已恢复，PC视口覆盖也已恢复。此前未跑分支不会自动算通过。
recovery：无需重装，按实际执行结果逐项更新。
evidence：执行记录-20261118.md
category：工具环境问题
id：BLK-1118-SMS
title：未指定短信测试接收号码
status：当前
caseIds：S02-02
S02-03
S03-02
S03-03
S04-02
S01-01
S04-01
actual：所有本轮样本均无手机号；通知0条，未发送任何测试短信。
impact：正向投递及真实记录重发无样本。
recovery：用户指定允许接收本轮QA短信的测试手机号；Codex只用于本轮通知，号码不写入公开报告。
evidence：资源准备/短信无接收者阻塞.png
执行记录-20261118.md
category：需要用户指定测试数据
id：BLK-1118-IDENTITY
title：第二微信身份及真机未提供
category：需要用户配合
status：当前
caseIds：C05-01
C05-02
X02-01
actual：本轮只有当前既有微信身份；真实分享/相册/组员签署不能用模拟器替代。
impact：跨身份权限及真机分享保存待测。
recovery：用户白天用第二个测试微信配合认领/签署，并在真机完成分享或相册验证；无需提供密码。
evidence：执行记录-20261118.md

## 规则变化
date：2026-11-18
source：用户最新说明：之前调试通的QA环境测试
reason：以最新用户要求及当前真实请求为准
oldRule：旧执行前报告写QA0待核实
newRule：本轮QA HTTP实际请求已核实；不改业务源稿
affectedCases：ENV01
closedIssues：
date：2026-11-18
source：用户确认C03摘要卡和20px/15px字号并要求合入原型及研发方案
reason：项目、价格与人数视觉层级调整
oldRule：普通文字摘要
newRule：V11-20：浅主题色摘要卡，项目名20px、选项15px，价格与人数分区；免费及签署规则不变。仅原型视觉和交互已检查，真实QA页面待开发后回归。
affectedCases：C03
X01
closedIssues：
baselineMigration：path：../../方案与需求/2026-event-registration-20261110/05-小程序逐页功能方案.md
oldSha256：6816e7d468dafda5543c7ead01f38f857ce9874e1c6aed8a1dbf602d187abb64
newSha256：e001bc30830842817e5f2a5b910617137dc5863b3e54c336b8d8a1abd61ae111
path：../../方案与需求/2026-event-registration-20261110/04-开发核对与验收清单.md
oldSha256：5a5e045b5a87be25cecec09ae2f5c95e048b2b3f0f01aab79cb0905f362366e8
newSha256：8f57bbc1626399984c55cb8496dec62895f2d7a4a5efb1929faf5b920853ae67
path：../../方案与需求/2026-event-registration-20261110/08-V1.1迭代对照.md
oldSha256：820d175604c135e12259f5c4003139dc56a446b23441aa020ee8e3998e023456
newSha256：96c931d05cded3ce75a8847dc2eb54900b6c8998d060bb6a921f24106e15b0fb
