import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

  return (
    <main class="sub signup wrapper">
      <div class="content">
        <div class="breadscrumb">
          <a href="#">Home</a>
          <a href="#">회원가입</a>
        </div>
        <div class="title">
          <h2>회원가입</h2>
          <p>도서출판 구민사는 오랫동안 사랑받아온 신기술서적 출판사입니다.</p>
        </div>
        <section>
          <h3>개인정보취급방침</h3>
          <div class="terms">
            <h4>::::: 개인정보취급방침:::::</h4>
    
            <p>구민사는 이용자들의 개인정보를 소중히 다루고 있습니다.</p>
            <p>현행 시행일자 : 2013년 11월 05일</p>
    
            <p>"개인정보"라 함은 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명, ID 등의
              사항에 의하여 당해 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른
              정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다.</p>
    
            <p>kuhminsa.co.kr(이하 "쇼핑몰"이라 함)은 이용자들의 개인정보보호를 매우 중요시하며, 이용자가
              쇼핑몰의 서비스(이하 "쇼핑몰 서비스" 또는 "쇼핑몰"이라 함)를 이용함과 동시에 온라인상
              에서 센터에 제공한 개인정보가 보호 받을 수 있도록 최선을 다하고 있습니다.
              쇼핑몰은 개인정보취급방침을 홈페이지 첫 화면에 공개함으로써 이용자들이 언제나 용이하게 보실 수 있도록
              조치하고 있습니다.
              쇼핑몰은 개인정보취급방침을 통하여 이용자들이 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고
              있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.</p>
    
            <p>쇼핑몰의 개인정보취급방침은 정부의 법률 및 지침 변경이나 쇼핑몰의 내부 방침 변경 등으로 인하여 수시로
              변경될 수 있고, 이에 따른 개인정보취급방침의 지속적인 개선을 위하여 필요한 절차를 정하고 있습니다.
              그리고 개인정보취급방침을 개정하는 경우 쇼핑몰은 개인정보취급방침 변경 시행 7일전부터 쇼핑몰
              공지사항을 통하여 공지하고 버전번호 및 개정일자 등을 부여하여 개정된 사항을 이용자들이 쉽게
              알아볼 수 있도록 하고 있습니다.</p>
    
            <p>쇼핑몰의 개인정보 보호정책은 다음과 같은 내용을 담고 있습니다.</p>
    
            <ul>
              <li>가. 이용자의 개인정보 보호</li>
              <li>나. 개인정보 수집에 대한 동의</li>
              <li>다. 쇼핑몰이 수집하는 개인정보 및 이용</li>
              <li>라. 개인정보의 보유 및 이용기간</li>
              <li>마. 쇼핑몰이 수집한 개인정보의 공유 및 제공</li>
              <li>바. 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항</li>
              <li>사. 쿠키(cookie)의 운영에 관한 사항</li>
              <li>아. 개인정보의 기술적-관리적 대책</li>
              <li>자. 개인정보의 위탁처리</li>
              <li>차. 개인정보 관련 의견 수렴</li>
              <li>카. 어린이 정보보호에 관한 사항</li>
              <li>타. 쇼핑몰 개인정보 관리책임자 및 담당자의 소속-성명 및 연락처</li>
              <li>파. 쇼핑몰 고객센터 안내</li>
              <li>하. 고지의 의무</li>
            </ul>
    
            <h4>가. 이용자의 개인정보 보호</h4>
    
            <p>쇼핑몰은 통신비밀보호법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 정보통신
              서비스제공자가 준수하여야 할 관련 법규상의 개인정보보호 규정 및 정보통신부가 제정한 개인정보
              보호지침을 준수하고 있습니다.</p>
    
            <h4>나. 개인정보의 수집에 대한 동의</h4>
    
            <p>쇼핑몰은 이용자들이 쇼핑몰의 개인정보취급방침 또는 이용약관의 내용에 대하여 『동의』 버튼 또는 『취소』
              버튼을 클릭할 수 있는 절차를 마련하여, 『동의』버튼을 클릭하면 개인정보 수집에 대해 동의한 것으로
              봅니다.</p>
    
            <h4>다. 쇼핑몰이 수집하는 개인정보 및 이용</h4>
    
            <p>대부분의 쇼핑몰 서비스는 별도의 사용자 등록이 없이 언제든지 사용할 수 있습니다. 그러나 쇼핑몰은
              회원서비스(메일, 복분자쇼핑 등 현재 제공 중이거나 향후 제공될 로그인 기반의 서비스)등을 통하여
              이용자들에게 맞춤식 서비스를 비롯한 보다 더 향상된 양질의 서비스를 제공하기 위하여 이용자 개인의
              정보를 수집하고 있습니다.</p>
    
            <p>수집되는 정보와 수집목적은 아래와 같습니다.</p>
    
            <h4>
              &lt;자동으로 수집. 저장되는 개인정보&gt;
            </h4>
            <p></p>- 이용자의 브라우저 종류 및 OS, 검색어
            <p></p>이용자가 쇼핑몰서비스를 이용할 경우 다음의 정보는 자동적으로 수집 , 저장되며, 본 정보는
            이용자 여러분의 사용환경을 이해하여 최적의 서비스 제공과 통계학적 분석을 위하여 사용됩니다.
    
            <h4>
              &lt;필수 수집 정보&gt;
            </h4>
            <p>- 성명, 아이디, 비밀번호, 이메일 주소, 부정이용방지 등을 위하여 사용됩니다.</p>
    
            <h4>
              &lt;부가 서비스 이용 시 수집 정보&gt;
            </h4>
            <p>- 전화번호, 주소, 이메일 주소</p>
            <p>고지사항 전달, 본인 의사확인, 불만처리 등 의사소통 경로의 확보, 새로운 서비스나 신상품, 이벤트
              정보 등 최신 정보안내, 청구서, 물품배송 시 정확한 배송지의 확보 등을 위하여 사용됩니다.</p>
            <p>- 은행계좌정보, 신용카드정보, 핸드폰번호, 전화번호</p>
            <p>유료정보이용에 대한 정확한 과금과 결제 등을 위하여 사용됩니다.</p>
    
            <h4>
              &lt;기타 수집 정보&gt;
            </h4>
            <p>- 그 외 선택항목</p>
            <p>개인맞춤서비스를 제공하기 위한 자료로 사용됩니다.</p>
            <p>- IP Address, 방문 일시</p>
            <p>불량회원의 부정 이용 방지와 비인가 사용 방지, 통계학적 분석 등을 위하여 사용됩니다.</p>
    
            <p>그 밖에 주소 및 연령대는 인구통계학적 분석을 위해 사용될 수 있으며, 가입 시 본인확인 등을 위해
              사용한 전화번호의 경우 부정가입의 방지를 위해 사용됩니다.</p>
    
            <p>쇼핑몰은 이용자의 사전 동의 없이는 이용자의 개인 정보를 공개하지 않으며, 수집된 정보는 아래와
              같이 이용하고 있습니다.</p>
    
            <p>첫째, 이용자들이 제공한 개인정보를 바탕으로 보다 더 유용한 서비스를 개발할 수 있습니다. 쇼핑몰은
              신규 서비스개발이나 컨텐츠의 확충 시에 기존 이용자들이 센터에 제공한 개인정보를 바탕으로 개발해야
              할 서비스의 우선 순위를 보다 더 효율적으로 정하고, 쇼핑몰은 이용자들이 필요로 할 컨텐츠를
              합리적으로 선택하여 제공할 수 있습니다.</p>
    
            <p>둘째, 쇼핑몰이 제공하는 각종 정보 및 서비스 등은 대부분 무료입니다. 쇼핑몰은 이러한 무료 서비스를
              제공하기 위해서 광고를 게재하고 있는데, 이용자들에 대한 정확한 개인정보를 바탕으로 각 서비스나
              메뉴 등에 적절하게 광고와 내용들을 전달해 드릴 수 있으며, 이것은 궁극적으로 쇼핑몰이 이용자 여러분
              들께 드리는 또 하나의 정보로서의 가치를 지니게 됩니다. 쇼핑몰은 광고주들로부터 광고를 받아
              광고주들이 대상으로 하려는 이용자의 유형에 맞게 광고를 보여줄 뿐, 광고주들에게는 절대로
              이용자들의 개인정보를 보여주거나 제공하지 않습니다.</p>
    
            <p>쇼핑몰내에서의 설문조사나 이벤트 행사 시 통계분석이나 경품제공 등을 위해 선별적으로
              개인정보 입력을 요청할 수 있습니다. 그러나, 이용자의 기본적 인권 침해의 우려가 있는 민감한
              개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및
              성생활 등)는 수집하지 않으며 부득이하게 수집해야 할 경우 이용자들의 사전동의를 반드시 구할
              것입니다. 그리고, 어떤 경우에라도 입력하신 정보를 이용자들에게 사전에 밝힌 목적 이외에 다른
              목적으로는 사용하지 않으며 외부로 유출하지 않습니다.</p>
    
            <p>쇼핑몰에 광고를 게재하는 광고주나 검색 등의 각종 디렉토리에 링크가 되어 있는 웹사이트들이
              이용자 여러분에 대하여 개인적으로 식별할 수 있는 개인정보를 수집할 수도 있을 것입니다. kuhminsa.co.kr에 링크되어 있는 웹사이트들이 개인정보를 수집하는 행위에 대해서는 본 "쇼핑몰
              개인정보
              취급방침"이 적용되지 않음을 알려 드립니다.</p>
    
            <h4>라. 개인정보의 보유 및 이용기간</h4>
    
            <p>이용자가 쇼핑몰의 회원으로서 센터에 제공하는 서비스를 이용하는 동안 쇼핑몰은 이용자들의 개인
              정보를 계속적으로 보유하며 서비스 제공 등을 위해 이용합니다. 다만, 아래의 "바. 이용자 자신의 개인
              정보 관리(열람, 정정, 삭제 등)에 관한 사항" 에서 설명한 절차와 방법에 따라 회원 본인이 직접 삭제
              하거나 수정한 정보, 가입해지를 요청한 경우에는 재생할 수 없는 방법에 의하여 디스크에서 완전히 삭제
              하며 추후 열람이나 이용이 불가능한 상태로 처리됩니다.</p>
    
            <p>그리고 "다. 쇼핑몰이 수집하는 개인정보 및 이용"에서와 같이 일시적인 목적(설문조사, 이벤트,
              본인확인 등)으로 입력 받은 개인정보는 그 목적이 달성된 이후에는 동일한 방법으로 사후 재생이
              불가능한 상태로 처리됩니다.</p>
    
            <p>귀하의 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은 목적이 달성되면 파기하는 것을
              원칙으로 합니다. 그리고 상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에
              의하여 보존할 필요가 있는 경우 쇼핑몰은 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
              이 경우 쇼핑몰은 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.</p>
    
            <ul>
              <li>
                - 계약 또는 청약철회 등에 관한 기록 : 5년
              </li>
              <li>
                - 대금결제 및 재화 등의 공급에 관한 기록 : 5년
              </li>
              <li>
                - 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
              </li>
            </ul>
    
            <p>쇼핑몰은 귀중한 회원의 개인정보를 안전하게 처리하며, 유출의 방지를 위하여 다음과 같은 방법을 통하여
              개인정보를 파기합니다.</p>
    
            <ul>
              <li>
                - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
              </li>
              <li>
                - 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
              </li>
            </ul>
    
            <h4>마. 쇼핑몰이 수집한 개인정보의 공유 및 제공</h4>
    
            <p>쇼핑몰은 이용자들의 개인정보를 "나. 개인정보의 수집목적 및 이용목적"에서 고지한 범위내에서 사용하며,
              이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에
              공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
    
            <ul>
              <li>- 이용자들이 사전에 공개에 동의한 경우</li>
              <li>- 서비스 제공에 따른 요금정산을 위하여 필요한 경우</li>
              <li>- 홈페이지에 게시한 쇼핑몰 서비스 이용 약관 및 기타 회원 서비스 등의 이용약관 또는 운영
                원칙을 위반한 경우</li>
              <li>- 쇼핑몰 서비스를 이용하여 타인에게 정신적, 물질적 피해를 줌으로써 그에 대한 법적인 조치를
                취하기 위하여 개인정보를 공개해야 한다고 판단되는 충분한 근거가 있는 경우</li>
              <li>- 기타 법에 의해 요구된다고 선의로 판단되는 경우 (ex. 관련법에 의거 적법한 절차에 의한 정부/
                수사기관의 요청이 있는 경우 등)</li>
              <li>- 통계작성,학술연구나 시장조사를 위하여 특정개인을 식별할 수 없는 형태로 광고주, 협력업체나
                연구단체 등에 제공하는 경우</li>
              <li>- 이용자의 서비스 이용에 따른 불만사항 및 문의사항(민원사항)의 처리를 위하여 파.항의 고객센터를
                운영하는 전문업체에 해당 민원사항의 처리에 필요한 개인정보를 제공하는 경우</li>
              <li>- 이벤트 및 경품 당첨 등의 서비스를 위하여 위탁업체로 정보를 제공할 수 있으며, 이때 필요한 정보의
                종류 및 이용 용도, 기간 등을 명시하여 이용자에게 고지</li>
            </ul>
    
            <p>그리고 쇼핑몰은 새로운 기술개발이나 보다 나은 서비스의 제공을 위하여 이용자들의 개인정보를 공유할
              수 있습니다. 이 경우에도 정보수집 또는 정보제공 이전에 이용자들에게 개인정보를 공유할 기관이나
              단체가 누구인지, 어떤 정보가 왜 필요한지, 그리고 언제까지 어떻게 보호되고 관리되는지 알려드리고
              동의를 구하는 절차를 거치게 되며, 이용자들의 동의가 없는 경우에는 추가적인 정보를 임의로 수집
              하거나 공유하지 않습니다.</p>
    
            <p>성별, 연령별 기타 특정 조건의 집단에 대한 광고 게재 및 발송 시에도 이용자들의 개인정보는 광고를
              의뢰한 개인이나 기업 등에 제공되지 않으며, 기타 통계처리나 학술연구, 시장조사를 위하여 필요한
              경우에도 특정한 개인을 식별할 수 없는 형태로만 정보가 제공됩니다.</p>
    
    
            <h4>바. 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항</h4>
    
            <p>이용자는 언제든지 쇼핑몰 홈페이지를 이용하여 등록되어 있는 자신의 개인정보를 조회하거나
              수정할 수 있으며 가입해지를 요청할 수도 있습니다.</p>
    
            <p>이용자들의 개인정보 조회 및 수정을 위해서는 회원관리 메뉴에서 아이디와 비밀번호를 사용하여
              로그인(LOG-IN)하면 되는데, 아이디(ID) 및 이름을 제외한 모든 입력사항을 수정할
              수 있습니다.</p>
    
            <p>가입해지는 홈페이지에 있는 "고객지원"를 클릭하고 묻고 답하기 게시판에 글을 남겨주시면,
              입력하신 사항을 기초로 이용자 본인여부를 확인한 후 처리합니다.</p>
    
            <p>이용자들은 쇼핑몰 서비스의 회원 아이디(ID)에 대하여 가입 해지 또는 이용 해지를 할 수
              있으나 이로 인하여 모든 서비스를 이용할 수 없게 되는 것은 아닙니다. 쇼핑몰은 이용자의 요청에
              의해 해지 또는 삭제된 개인정보는 “라.쇼핑몰이 수집하는 개인정보의 보유 및 이용기간”에
              명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.</p>
    
            <h4>사. 쿠키(cookie)의 운영에 관한 사항</h4>
    
            <p>이용자들에게 특화된 맞춤서비스를 제공하기 위해서 쇼핑몰은 이용자들의 정보를 저장하고
              수시로 불러오는 '쿠키(cookie)'를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버(HTTP)가
              이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에
              저장되기도 합니다.</p>
    
            <p>이용자들이 쇼핑몰에 접속한 후 로그인(LOG-IN)하여 회원서비스 등의 서비스를 이용하기
              위해서는 쿠키를 허용하셔야 합니다. 쇼핑몰은 이용자들에게 적합하고 보다 유용한 서비스를
              제공하기 위해서 쿠키를 이용하여 아이디에 대한 정보를 찾아냅니다. 쿠키는 이용자의 컴퓨터는
              식별하지만 이용자를 개인적으로 식별하지는 않습니다.</p>
    
            <p>이용자들은 쿠키에 대하여 사용여부를 선택할 수 있습니다. 웹브라우저에서 옵션을 설정함으로써
              모든 쿠키를 허용할 수도 있고, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할
              수도 있습니다. 다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 일부 서비스는 이용할
              수 없습니다.</p>
    
            <h4>아. 개인정보관련 기술적-관리적 대책</h4>
    
            <p>쇼핑몰은 이용자들의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지
              않도록 안전성 확보를 위하여 다음과 같은 기술적 대책을 강구하고 있습니다.</p>
    
            <p>이용자들의 개인정보는 비밀번호에 의해 철저히 보호되고 있습니다. 회원 아이디(ID)의 비밀번호는
              본인만이 알고 있으며, 개인정보의 확인 및 변경도 비밀번호를 알고 있는 본인에 의해서만 가능합니다.
              따라서 이용자 여러분께서는 비밀번호를 누구에게도 알려주시면 안됩니다. 이를 위해 센터에서는
              기본적으로 PC에서의 사용을 마치신 후 온라인상에서 로그아웃(LOG-OUT)하시고 웹브라우저를 종료하도록
              권장합니다. 특히 다른 사람과 PC를 공유하여 사용하거나 공공장소(센터나 학교, 도서관, 인터넷
              게임방 등)에서 이용한 경우에는 개인정보가 다른 사람에게 알려지는 것을 막기 위해 위와 같은
              절차가 더욱 필요할 것입니다.</p>
    
            <p>쇼핑몰은 해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보가 유출되거나 훼손되는 것을 막기 위해
              최선을 다하고 있습니다. 개인정보의 훼손에 대비해서 자료를 수시로 백업하고 있고, 최신 백신
              프로그램을 이용하여 이용자들의 개인정보나 자료가 누출되거나 손상되지 않도록 방지하고 있으며,
              암호화통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다.
              그리고 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있으며, 기타 시스템적으로
              보안성을 확보하기 위한 가능한 모든 기술적 장치를 갖추려 노력하고 있습니다.</p>
    
            <p>쇼핑몰의 개인정보관련 취급 직원은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를 부여하여
              정기적으로 갱신하고 있으며, 담당자에 대한 수시 교육을 통하여 개인정보 보호정책의 준수를 항상
              강조하고 있습니다. 그리고 사내 개인정보전담기구 등을 통하여 개인정보 보호정책의 이행사항 및
              담당자의 준수여부를 확인하여 문제가 발견될 경우 즉시 수정하고 바로 잡을 수 있도록 노력하고
              있습니다. 단, 이용자 본인의 부주의나 인터넷상의 문제로 ID, 비밀번호등 개인정보가
              유출해 발생한 문제에 대해 쇼핑몰은 일체의 책임을 지지 않습니다.</p>
    
            <h4>자. 개인정보의 위탁처리</h4>
    
            <p>쇼핑몰은 서비스 향상을 위해서 이용자들의 개인정보를 외부전문업체에 위탁하여 처리할 수 있습니다.
              개인정보의 처리를 위탁하는 경우에는 미리 그 사실을 이용자들에게 공지할 것입니다. 또한 위탁계약
              등을 통하여 서비스제공자의 개인정보보호 관련 지시엄수, 개인정보에 관한 비밀유지, 제3자 제공의
              금지 및 사고시의 책임부담 등을 명확히 규정하고 당해 계약내용을 서면 또는 전자적으로 보관하여
              이용자의 권익을 보호하고 있습니다.</p>
    
            <h4>차. 개인정보관련 의견수렴</h4>
    
            <p>쇼핑몰은 개인정보보호와 관련하여 이용자 여러분들의 의견을 수렴하고 있으며 불만을 처리하기 위하여
              모든 절차와 방법을 마련하고 있습니다. 이용자들은 하단에 명시한 "타. 개인정보 관리책임자 및
              담당자의 소속-성명 및 연락처"항을 참고하여 전화나 메일을 통하여 불만사항을 신고할 수 있고,
              쇼핑몰은 이용자들의 신고사항에 대하여 신속하고도 충분한 답변을 해 드릴 것입니다.</p>
    
            <p>또는 정부에서 설치하여 운영중인 아래의 기관에 불만처리를 신청할 수 있습니다.</p>
    
            <ul>
              <li>- 개인정보 침해신고센터 (http://www.cyberprivacy.or.kr, 전화 1336)</li>
              <li>- 개인정보 분쟁조정위원회 (http://www.kopico.or.kr, 전화 1336)</li>
              <li>- 정보보호마크 인증위원회 (http://www.privacymark.or.kr, 전화 02-580-0533)</li>
              <li>- 경찰청 (http://www.police.go.kr) </li>
            </ul>
    
            <h4>카. 어린이 정보보호에 관한 사항</h4>
            <p></p>쇼핑몰은 만 14세 미만 아동의 개인정보를 보호하기 위하여 회원가입을 만 14세 이상이
            되어야 가능하도록 하여 아동의 개인정보를 수집하지 않습니다.
    
            <h4>타. 개인정보 관리책임자 및 담당자의 소속-성명 및 연락처</h4>
            <p>쇼핑몰은 귀하가 좋은 정보를 안전하게 이용할 수 있도록 최선을 다하고 있습니다. 개인정보를
              보호하는데 있어 귀하께 고지한 사항들에 반하는 사고가 발생할 경우 개인정보관리책임자가 책임을
              집니다.</p>
    
            <p>이용자 개인정보와 관련한 아이디(ID)의 비밀번호에 대한 보안유지책임은 해당 이용자 자신에게
              있습니다. 쇼핑몰은 비밀번호에 대해 어떠한 방법으로도 이용자에게 직접적으로 질문하는 경우는
              없으므로 타인에게 비밀번호가 유출되지 않도록 각별히 주의하시기 바랍니다. 특히 "아. 개인정보
              관련 기술적-관리적 대책"항에서 명시한 것과 같이 공공장소에서 온라인상에서 접속해 있을 경우에는
              더욱 유의하셔야 합니다. 쇼핑몰은 개인정보에 대한 의견수렴 및 불만처리를 담당하는 개인정보
              관리책임자 및 담당자를 지정하고 있고, 연락처는 아래와 같습니다.</p>
    
            <h4>[개인정보 보호관련 민원처리센터]</h4>
            <p>＊개인정보처리 담당자: 원보연 boyeon00@naver.com</p>
            <p>＊전화번호: 063-261-2332</p>
            <p>＊팩스번호: 063-261-1188</p>
            <p>＊주소: 전라북도 완주군 경천면 경천리 227-3</p>
    
            <h4>다. 전화상담은 월~금 오전 09:00 ~ 오후 06:00 에만 가능합니다.</h4>
            <h4>라. 전자우편이나 팩스 및 우편을 이용한 상담은 접수 후 24시간내에 답변될 수 있도록 노력하겠습니다.</h4>
            <h4>마. 기타 개인정보에 관한 상담이 필요한 경우에는 개인정보침해신고센터, 대검찰청 인터넷범죄
              수사센터, 경찰청 사이버테러대응센터 등으로 문의하실 수 있습니다.</h4>
            <h4></h4>[개인정보침해신고센터]
            <p>＊ 전화: 1336</p>
            <p>＊ URL: http://www.cyberprivacy.or.kr/</p>
    
            <h4>[대검찰청 인터넷범죄수사센터]</h4>
            <p>＊ 전화: 02-3480-3600</p>
            <p>＊ URL: http://icic.sppo.go.kr/</p>
    
            <h4>[경찰청 사이버테러대응센터]</h4>
            <p>＊ 전화: 02-392-0330</p>
            <p>＊ URL: http://www.ctrc.go.kr/</p>
    
    
            <h4>파. 쇼핑몰 고객센터 안내</h4>
    
            <p>쇼핑몰은 고객의 민원사항 처리를 위해 고객센터를 운영하고 있으며 운영현황과 연락처는
              다음과 같습니다.</p>
    
            <ul>
              <li>- 근무시간 : 월~금 09:00~18:00 (공휴일은 휴무)</li>
              <li>- 전화번호 : 1644-1910</li>
              <li>- 팩스 :</li>
              <li>- 등기우편 : 전라북도 전주시 덕진구 팔복동 1가 356-4</li>
              <li>- 기타문의 : 이메일 (mib1910@yemail.com)로 문의바랍니다.</li>
            </ul>
    
            <p>그 외 개인정보에 관한 상담이 필요한 경우에는 한국정보보호진흥원(KISA)에서 운영하는
              개인정보 침해신고센터 (전화 : 1336)으로 문의하실 수 있습니다.</p>
    
            <h4>하. 고지의 의무</h4>
    
    
            <p>현 개인정보취급방침 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터
              홈페이지의 '공지사항'을 통해 고지할 것입니다.</p>
    
            <p>공고일자 : 2008년 12월 3일</p>
            <p>시행일자 : 2008년 12월 3일</p>
          </div>
        </section>
        <section>
          <h3>쇼핑몰 소비자 이용약관</h3>
          <div class="terms">
            <h4>:::::쇼핑몰 소비자 이용약관:::::</h4>
    
            <h4>※ 제 1 장 총 칙 ※</h4>
    
            <p>◆ 제1조 (명칭) ◆</p>
            <p>본 쇼핑몰은 [쇼핑몰]이라고 칭합니다.</p>
    
            <p>◆ 제2조 (운영주체) ◆</p>
            <p>본 쇼핑몰의 운영주체는 쇼핑몰입니다.</p>
    
            <p>◆ 제3조 (목적) ◆</p>
            <p>본 약관은 고객들이 본 쇼핑몰을 이용함에 있어서 쇼핑몰과 고객간의 관계를 정함을 목적으로 합니다.</p>
    
            <p>◆ 제4조 (약관의 변경) ◆</p>
            <p>1. 회사가 본 약관을 변경하고자 하는 경우 쇼핑몰은 변경된 내용을 적용예정일 (30일)전까지 고객에게
              통지하여야 합니다.고객이 적용예정일까지 이의를 제기하지 아니한 때에는 변경된 약관을
              승인한 것으로 봅니다.</p>
    
            <p>2. 고객이 이의를 제기한 때에는 본 쇼핑몰에 대하여 탈퇴의사를 밝힌 것으로 봅니다.</p>
    
            <p>◆ 제5조 (본 약관에서 정하지 아니한 사항) ◆</p>
            <p>본 약관에서 정하지 아니한 사항과 본 약관의 해석에 관하여는 관계법령 또는 상관례에 따릅니다.</p>
    
            <h4>※ 제 2 장 서비스의 이용 ※</h4>
    
            <p>◆ 제6조 (결제수단) ◆</p>
            <p>상품 구입대금의 결제는 신용카드, 무통장 입금, 소액결제등으로 할 수 있습니다.</p>
    
            <h4>※ 제 3 장 청약의 철회 ※</h4>
    
            <p>◆ 제7조 (청약의 철회) ◆</p>
            <p>1. 고객은 다음 각 호의 경우 상품을 인도받거나 용역을 제공받은 후 30일 이내에 청약을
              철회할 수 있습니다.</p>
    
            <p>* 고객에게 인도될 당시 당해 상품이 훼손된 경우
              (단, 고객의 책임 있는 사유로 상품이 훼손된 경우는 예외로 한다.)</p>
            <p>* 광고의 내용과 다른 상품이 인도된 경우</p>
            <p>* 상품의 인도가 광고에 표시된 상품의 인도시기보다 늦어진 경우(7일 이내).</p>
            <p>* 회사가 당해 상품 광고에 상품의 종류, 상품의 판매가격, 상품대금의 지급시 및 방법,
              상품의 인도시기 등을 표시하지 아니한 상태에서 고객의 청약이 이루어진 경우,</p>
    
            <p>2. 교환 및 환불시 절차</p>
            <p>고객은 상품에 대한 청약의 철회의사를 쇼핑몰 교환 및 환불 담당에게 문의할 수 있습니다.
              청약이 철회되면, 고객은 당해 상품을 반환하여야 하며, 쇼핑몰은 이미 지급받은
              상품의 대금을 상품을 반환받은 날의 다음 영업일까지 환불하여야 합니다.
              만일 회원이 신용카드로 상품의 대금을 지급한 때에는, 쇼핑몰은 즉시 당해 신용카드업자에게 상품대금의
              청구를 정지 또는 취소할 것을 요청하여야 합니다.</p>
    
            <p>3. 제2항의 경우 인도받은 상품의 반환에 필요한 비용은 회사가 부담합니다.</p>
    
            <h4>※ 제 4 장 고객정보의 보호 및 보안관리 ※</h4>
    
            <p>◆ 제8조 (개인정보의 취득 및 이용) ◆</p>
            <p>1. 쇼핑몰은 고객으로부터 취득한 정보를 회사가 제공하는 재화의 인도를 위해 제공되었는지 여부의 확인,
              재화의 추천 기타 마케팅활동을 위하여만 활용하여야 합니다.</p>
    
            <p>2. 고객은 회사가 정한 필수적 기재사항 (성명, 주소등, ...)은 반드시 입력 하여야
              합니다. 선택적 기재사항에 대하여는 고객이 원하는 경우에만 입력합니다.</p>
    
            <p>3. 쇼핑몰은 취득한 회원정보를 제1항에 기재된 목적 이외의 목적으로 이용할 수 없습니다.
              또한 회원의 사전승낙 없이 이를 제3자에게 제공하지 아니합니다. 다만, 상품의 배달을
              의뢰하는 자에게 배달에 필요한 정보를 제공하는 경우와 법령에 의하여 회원정보를 제공
              하여야 하는 경우는 제외합니다.</p>
    
            <p>4. 고객은 자신이 제공한 정보를 열람할 수 있으며, 그 정보가 잘못된 경우 수정을 요구할
              수 있습니다. 또한 언제든지 자신이 제공한 정보를 삭제할 것을 요청할 수 있습니다.</p>
    
            <p>◆ 제9조 (보안관리) ◆</p>
    
            <p>1. 쇼핑몰은 고객의 개인정보 및 지불정보를 보호하여야 합니다. 이를 위하여 쇼핑몰은 관리
              지침을 두고 관리자를 지정하는 등 회원정보의 관리에 최선을 다합니다.</p>
    
            <h4>※ 제 5 장 회사의 의무와 고객의 의무 ※</h4>
    
            <p>◆ 제10조 (회사의 의무) ◆</p>
            <p>1. 쇼핑몰은 회원에 대하여 계속적, 안정적으로 서비스를 제공할 의무가 있습니다.</p>
            <p>2. 쇼핑몰은 서비스 제공설비를 운용 가능한 상태로 항상 유지하여야 하며, 장애가 발생했을
              때에는 지체 없이 이를 수리, 복구하여 고객 및 이용자의 서비스 이용에 불편이 없도록
              합니다.</p>
            <p>3. 쇼핑몰은 제3장 정보보호, 보안과 관련하여 자신의 의무를 준수합니다.</p>
            <p>4. 쇼핑몰은 회원으로부터 제기되는 불만이 정당하다고 인정되는 경우에는 이를 지체없이
              처리하여야 합니다. 단, 불만사항을 즉시 처리하는 것이 곤란할 경우에는 당해 고객
              에게 그 사유를 통보하여야 합니다.</p>
    
            <p>◆ 제11조 (고객의 의무) ◆</p>
            <p>1. 고객의 인터넷 보안 관리책임은 고객 본인에게 있습니다.</p>
            <p>2. 고객은 본 약관 및 관계법령을 준수하여야 하며, 권리의 부당한 행사로 회사의 업무수행
              에 현저한 지장을 초래하는 행위를 하여서는 안됩니다.</p>
            <p>3. 고객은 연락처, 주소등이 변경되 경우 즉시 회사에 통보하여야 합니다. 이를 게을리하여
              발생한 손해에 대하여 쇼핑몰은 책임을지지 아니합니다.</p>
            <p>4. 마일리지는 해당 상품금액에 적립금액의 만큼의 감액, 상품구입으로 이용 하실수 있습니다.</p>
    
            <h4>※ 부 칙 ※</h4>
            <p>본 약관은 2013년 11월 05일 부터 시행 합니다.</p>
          </div>
        </section>
        <section class="agree">
          <div class="checkbox">
            <input id="checkSignupAgree" type="checkbox" />
            <label for="checkSignupAgree">동의합니다</label>
          </div>
          <button class="btn-main" onclick="location.href='signup_02.html'">회원가입</button>
        </section>
      </div>
    </main>
  )
}

export default SignUp