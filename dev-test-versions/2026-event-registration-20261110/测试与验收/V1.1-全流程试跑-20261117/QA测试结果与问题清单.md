# 赛事活动报名｜后台与小程序全流程验收｜QA测试结果与问题清单

## 当前状态
{
  "cases": 28,
  "variants": 66,
  "results": {
    "通过": 31,
    "阻塞": 25,
    "有问题": 6,
    "未跑": 3
  },
  "scope": {
    "本期必测": 65,
    "后续验证": 1
  },
  "parentResults": {
    "通过": 7,
    "阻塞": 14,
    "有问题": 6,
    "后续验证": 1
  },
  "issues": {
    "当前缺陷": 5,
    "方案调整后关闭": 2,
    "待复测": 1
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
status：方案调整后关闭
cases：B01-02
pages：B01
entry：赛事24 / 推广
flow：配置→游客
preconditions：QA专用赛事24
steps：赛事列表点击本轮赛事推广
expected：能获取绑定赛事的真实路径或码
actual：新版后台两种推广的小程序/H5路径已生成，绑定activityId24；小程序码页提示获取太阳码失败，下载禁用。公开查询可经独立编译验证。
impact：本轮不再阻塞验收；历史实测及证据保留。
evidence：path：资源准备/赛事推广码获取失败-新版.png
label：新版实际：太阳码获取失败
path：资源准备/查询推广路径已恢复.png
label：新版实际：查询推广路径已恢复
path：资源准备/推广路径未配置.png
label：查看问题截图：推广路径未配置
资源准备/赛事推广入口未配置.txt
restoration：未更改系统推广配置，待补配置后复测
retest：2026-11-18：用户明确接受当前实现/确认上线条件，按产品决定关闭，非开发修复。
resolution：产品确认通过：QA推广路径已核实；小程序码需要上线后才有，本轮不再以QA取码失败阻塞，不代表已验证生产扫码。
triage：产品确认通过
owner：产品已确认
screenshotStatus：有实际截图；001/003/004为原执行现场，002/005/006为本次补拍
technicalEvidence：资源准备/赛事推广入口未配置.txt

### EVT-QA-003 短信模板弹窗仍显示已要求移除的字数统计
module：短信通知
type：已确认缺陷
severity：P3
status：方案调整后关闭
cases：S01-02
pages：B12
entry：赛事24 / 短信通知 / 新增模板
flow：模板配置
preconditions：打开模板配置弹窗
steps：打开新增模板
观察模板内容下方
expected：按用户明确确认不显示字数统计
actual：空内容显示0/2000，插入参数后显示20/2000
impact：本轮不再阻塞验收；历史实测及证据保留。
evidence：path：资源准备/短信模板仍显示字数统计.jpg
label：查看问题截图：短信模板仍显示字数统计
资源准备/延期模板保存重开回显.txt
restoration：只在新建隔离赛事24保存QA延期模板；没有发短信
retest：2026-11-18：用户明确接受当前实现/确认上线条件，按产品决定关闭，非开发修复。
resolution：产品确认通过：接受短信模板保留现有字数统计，无需修改。沿用已验证的两类模板保存、回显、空值校验及取消不保存。
triage：产品确认通过
owner：产品已确认
screenshotStatus：有实际截图；001/003/004为原执行现场，002/005/006为本次补拍
technicalEvidence：资源准备/延期模板保存重开回显.txt

### EVT-QA-004 已成功报名后首页报名入口仍打开空白可编辑表单
module：小程序报名入口
type：待产品确认
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
evidence：path：资源准备/方案原文-C01成功恢复只读.png
label：方案原文截图：C01成功恢复只读（V11-17）
path：资源准备/成功后首页报名仍空表单-新版.png
label：最新代码回归：成功后首页仍为空表单
path：资源准备/成功后首页报名仍进入空表单.png
label：查看问题截图：成功后首页报名仍进入空表单
资源准备/成功后首页报名仍进入空表单.txt
资源准备/最新代码回归1118.txt
restoration：未修改或提交该空表单，重新编译离开。
retest：2026-11-18 14:00:59：1ff63a8e下成功66从首页再次报名仍为空表单，未重复提交。 2026-11-18：已核实原文依据并补截图，等待产品确认是否调整，未重复提交成功记录。
resolution：现方案05-小程序逐页功能方案.md第48—61行，C01“再次点击报名时恢复原记录”，第58行明确报名成功进入C03原资料只读；C03、K03、K06及F02沿同一规则。用户本轮询问原文，尚未确认改为新建报名，暂不改该业务规则。
triage：现方案明确恢复成功记录；产品正在复核是否改为新报名
owner：产品确认成功后再次报名规则后再决定开发改动
screenshotStatus：有实际截图；001/003/004为原执行现场，002/005/006为本次补拍
technicalEvidence：资源准备/成功后首页报名仍进入空表单.txt
资源准备/最新代码回归1118.txt

### EVT-QA-005 日历票可售窗口缺少核验依据，交集判断待核查
module：关联门票
type：配置待核实
severity：P2
status：待复测
cases：T01-03
pages：B08
entry：赛事24项目35关联门票候选132954
flow：单日比赛匹配日历票
preconditions：项目35比赛11/25，报名11/17—11/25；原票132954当天报价0.03库存100、立即预约、当日提前0小时。
steps：查看原票日历11/25及预订规则
项目35选择单日11/25并进入关联候选
查看日历票价格库存和禁选原因
expected：有当天报价且存在时间交集时可选；若存在其他限制应显示可定位的原因。
actual：2026-11-18复核：比赛日11/25价格0.03、库存100正确；使用日期也匹配。可报名时间栏为空并提示无交集，规则详情未展示原票可售起止；尚无证据证明交集存在。
impact：仅日历票正向关联的可售窗口判断待核实；比赛日价格库存T01-02已通过。
evidence：path：资源准备/日历票规则明细复核-20261118.png
label：本轮截图：价格库存正确，可售起止未显示
path：资源准备/方案原文-K07比赛日价格库存.png
label：方案原文：比赛日价格库存与可售期
path：资源准备/日历票有报价却无交集.png
label：查看问题截图：日历票有报价却无交集
资源准备/单日日历报价03但无交集.txt
资源准备/日历票原始预订规则.txt
资源准备/日历票1125报价03与1126缺价原配置.txt
restoration：未新增关联，项目35仍为132948，比赛11/25、名额4，原票已上架。
retest：2026-11-18：候选仍禁选，价格库存正确。下一步需核实真实可售窗口；未选择或保存新关联。
resolution：修正先前把价格库存与可售交集合并的判断。方案K02、K07及B08已区分比赛日期取库存与报名时间交集，暂不改方案，不认定Bug。
triage：可售窗口证据不足，待核实配置或计算
owner：先取得原票实际可售起止或正常购票对照；如证明存在交集再交开发
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
actual：沿既有报名67点击立即报名一次，页面红色提示“原票下单校验未通过，请检查报名条件后重试”。接口外层code=0/msg=成功，但业务status=READY、submitState=FAILED、paymentLink=null；failureReason同页面泛化提示，没有具体票务拒绝规则。traceId=b9939d0e3197c95c52652687d53b0f96。未进入支付，未认定是配置错误。
impact：收费链路在支付前中断；阻塞待付、取消订单、成功支付、退款和有单票锁定等后续用例。不是用户未付款导致。
evidence：path：资源准备/收费拒绝原因复测-20261118.png
label：本轮游客截图：实际拒绝提示
path：资源准备/收费拒绝接口明细-20261118.png
label：本轮调试器截图：业务失败及追踪号
资源准备/收费拒绝原因复测-20261118.txt
path：资源准备/收费提交新版回归.png
label：最新代码收费提交回归界面
path：资源准备/收费失败提示-游客界面.png
label：查看问题截图：收费失败提示-游客界面
资源准备/收费提交67业务返回.txt
资源准备/收费提交67后台回查.txt
资源准备/无证件收费下单失败.txt
资源准备/最新代码回归1118.txt
restoration：沿原记录67仅提交一次复测，未新增报名或付款；保留失败现场。
owner：开发按traceId查明实际拒绝规则；查明后沿记录67复测
retest：2026-11-18 16:51：原记录67复测仍拒绝；已提供页面提示及返回明细截图。
resolution：接口没有给出具体拒绝条件，因此目前只能确认失败现象。需开发按本轮traceId查原票校验链路，回传实际失败规则及参数。不能让用户盲改配置或先支付。
screenshotStatus：有实际截图；001/003/004为原执行现场，002/005/006为本次补拍
technicalEvidence：资源准备/收费提交67业务返回.txt
资源准备/收费提交67后台回查.txt
资源准备/无证件收费下单失败.txt
资源准备/最新代码回归1118.txt
资源准备/收费拒绝原因复测-20261118.txt

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
actual：沿既有报名67点击立即报名一次，页面红色提示“原票下单校验未通过，请检查报名条件后重试”。接口外层code=0/msg=成功，但业务status=READY、submitState=FAILED、paymentLink=null；failureReason同页面泛化提示，没有具体票务拒绝规则。traceId=b9939d0e3197c95c52652687d53b0f96。未进入支付，未认定是配置错误。
impact：待付款、取消支付、关闭原订单及有单关联票分支尚无样本。不是支付手动确认阻塞。
recovery：接口没有给出具体拒绝条件，因此目前只能确认失败现象。需开发按本轮traceId查原票校验链路，回传实际失败规则及参数。不能让用户盲改配置或先支付。
evidence：资源准备/收费拒绝原因复测-20261118.png
资源准备/收费拒绝接口明细-20261118.png
资源准备/收费拒绝原因复测-20261118.txt
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
date：2026-11-18
source：用户明确同意：小程序码上线才有算过；短信模板字数统计接受现状算过
reason：按产品新决定更新验收预期，历史事实保留
oldRule：QA小程序码失败阻塞；模板不得显示字数
newRule：QA码按上线条件确认通过；允许保留模板现有字数统计
affectedCases：B01-02
S01-02
closedIssues：EVT-QA-002
EVT-QA-003
baselineMigration：path：../../方案与需求/2026-event-registration-20261110/03-后台逐页功能方案.md
oldSha256：eaf94a1d11d84fbae83e8220a71e35c0ba1b8ca8687e2ed6282faeb1a9f2c29f
newSha256：80c65a7d292693ebeb6ecbf9dcb9cf3745408ca9274b92311936c3644f1756cc
date：2026-11-18
source：用户要求复核005日期口径及现方案K02/K07/B08
reason：分离价格库存正确与可售窗口未证明，纠正合并判断
oldRule：T01-02价格库存取值和关联交集合并判有问题
newRule：T01-02价格库存通过；新增T01-03独立核查可售窗口，EVT-QA-005待复测，未认定Bug
affectedCases：T01-02
T01-03
closedIssues：
date：2026-11-18
source：用户要求在B08页面方案中完整重写原票规则详情的取值和条件提示
reason：补齐原先只有业务原则、详细文案留在原型中的交付缺口
oldRule：B08只概述原票要求与匹配原因，具体字段和分支提示不完整
newRule：B08增加顶部字段、逐行原票取值、判断条件、具体提示、未知值与汇总规则；K07链接本页，验收清单补专项。属于文档补全，未声称真实系统已实现或通过。
affectedCases：B04
T01
T02
closedIssues：
baselineMigration：path：../../方案与需求/2026-event-registration-20261110/03-后台逐页功能方案.md
oldSha256：80c65a7d292693ebeb6ecbf9dcb9cf3745408ca9274b92311936c3644f1756cc
newSha256：6e5d0976920c953dc424ccadccd4c086f7ca17e3ff9420baea8a5b2f946132ab
path：../../方案与需求/2026-event-registration-20261110/06-公共业务规则.md
oldSha256：455c5074ed701196d76d5d7554e68db20eae6f01cfbe76f38cd9ce156bf50444
newSha256：1774b4b357ebbf4d79e1cc483efcfc4b327a1c023873760ca87e06ddf91a9f03
path：../../方案与需求/2026-event-registration-20261110/04-开发核对与验收清单.md
oldSha256：8f57bbc1626399984c55cb8496dec62895f2d7a4a5efb1929faf5b920853ae67
newSha256：0015b3d993dfa0dec15133c9ec2d4cdd2ada32f1935278c779902d2e316a968e
date：2026-11-18
source：用户要求关联门票列表增加门票上下架状态列，原型及方案同步
reason：直接展示所关联原票当前上下架状态
oldRule：关联主表未独立展示门票状态
newRule：关联门票后增加只读门票状态；非上架突出，未知显示—；原有匹配、锁定和游客隐藏规则不变。仅本地原型和方案更新，真实QA待开发回归。
affectedCases：B04
T02
X01
closedIssues：
baselineMigration：path：../../方案与需求/2026-event-registration-20261110/03-后台逐页功能方案.md
oldSha256：6e5d0976920c953dc424ccadccd4c086f7ca17e3ff9420baea8a5b2f946132ab
newSha256：2cfc9a6796acf5932e794ba663a84a23e026cc21479e2ebcc889febb6ce8002f
path：../../方案与需求/2026-event-registration-20261110/04-开发核对与验收清单.md
oldSha256：0015b3d993dfa0dec15133c9ec2d4cdd2ada32f1935278c779902d2e316a968e
newSha256：50cd429a994ac4344e517cfb208501ddf0bc541fecc80e0f0b2d2a2cb772e871
