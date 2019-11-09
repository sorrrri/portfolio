<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="header.jsp" %>
<div class="sub service_apply">
	<div class="section section_01">
		<div class="title">서비스 신청</div>
	</div>
	<div class="section section_02">
		<h1>서비스 신청</h1>
		<div class="deco"></div>
		<form class="wrapper">
			<ol class="stepBar step4">
				<li class="step current">1. 기본 정보 입력</li>
				<li class="step">2. 인증 정보 입력</li>
				<li class="step">3. 에디션 선택</li>
				<li class="step">4. 신청 완료</li>
			</ol>
			<h2>담당자 정보</h2>
			<div class="info">
				<div class="row">
					<div class="title">이름<span>(필수)</span></div>
					<div class="input">
						<input type="text" placeholder="(성) 홍" />
						<input type="text" placeholder="(이름) 길동" />
					</div>
				</div>
				<div class="row">
					<div class="title">비밀번호<span>(필수)</span></div>
					<div class="input">
						<input type="text" />
						<span>※ 암호는 숫자, 대문자 및 소문자를 포함하여 8자리 이상</span>
					</div>
				</div>
				<div class="row">
					<div class="title">비밀번호 확인<span>(필수)</span></div>
					<div class="input">
						<input type="text" />
					</div>
				</div>
				<div class="row">
					<div class="title">이메일<span>(필수)</span></div>
					<div class="input">
						<input type="text" />
						<button class="confirm">인증번호 발송</button>
					</div>
				</div>
				<div class="row">
					<div class="title">부서/직급<span>(필수)</span></div>
					<div class="input">
						<input type="text" placeholder="부서" />
						<input type="text" placeholder="직급" />
					</div>
				</div>
				<div class="row">
					<div class="title">신청경로<span>(필수)</span></div>
					<div class="input">
						<div class="dropdown">
							<div class="select">
								<span>선택하세요</span>
								<i class="fa fa-chevron-left"></i>
							</div>
							<input type="hidden" name="">
							<ul class="dropdown-menu">
								<li>인터넷</li>
								<li>광고 ・ 메일</li>
								<li>인증기관</li>
								<li>컨설턴트</li>
								<li>포탈 검색</li>
								<li>지인 소개</li>
								<li>기타</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			
			<h2>회사 정보</h2>
			<div class="info">
				<div class="row">
					<div class="title">회사명<span>(필수)</span></div>
					<div class="input">
						<input type="text" />
					</div>
				</div>
				<div class="row">
					<div class="title">기업분류<span>(필수)</span></div>
					<div class="input">
						<div class="dropdown" style="width:400px">
							<div class="select">
								<span>선택하세요</span>
								<i class="fa fa-chevron-left"></i>
							</div>
							<input type="hidden" name="">
							<ul class="dropdown-menu">
								<li>01. 농업, 임업 및 어업</li>
								<li>02. 광업</li>
								<li>03. 제조업</li>
								<li>04. 전기, 가스, 증기 및 수도사업</li>
								<li>05. 하수·폐기물 처리, 원료재생 및 환경복원업</li>
								<li>06. 건설업</li>
								<li>07. 도매 및 소매업</li>
								<li>08. 운수업</li>
								<li>09. 숙박 및 음식점업</li>
								<li>10. 출판, 영상, 방송통신 및 정보서비스업</li>
								<li>11. 금융 및 보험업</li>
								<li>12. 부동산업 및 임대업</li>
								<li>13. 전문, 과학 및 기술 서비스업</li>
								<li>14. 사업시설관리 및 사업지원 서비스업</li>
								<li>15. 공공행정, 국방 및 사회보장 행정</li>
								<li>16. 교육 서비스업</li>
								<li>17. 보건업 및 사회복지 서비스업</li>
								<li>18. 예술, 스포츠 및 여가관련 서비스업</li>
								<li>19. 협회 및 단체, 수리 및 기타 개인 서비스업</li>
								<li>20. 가구내 고용활동 및 달리 분류되지 않은 자가소비 생산활동</li>
								<li>21. 국제 및 외국기관</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="title">연락처<span>(필수)</span></div>
					<div class="input">
						<input type="text" placeholder="예) 02-000-0000" />
					</div>
				</div>
				<div class="row" style="height:8em">
					<div class="title">주소<span>(필수)</span></div>
					<div class="input" style="">
						<input type="text" placeholder="우편번호" />
						<button class="confirm">주소찾기</button>
					</div>
					<div class="input address">
						<input type="text" placeholder="상세주소 입력" />
					</div>
				</div>
				<div class="row">
					<div class="title">사업자등록번호<span>(필수)</span></div>
					<div class="input">
						<input type="text" />
					</div>
				</div>
			</div>
			<ul class="agreement">
				<li>・ 서비스 이용 약관
					<a href="#"><span><i class="far fa-check-circle fa-lg"></i>내용 확인 및 동의</span></a>
				</li>
				<li>・ 개인정보 취급방침
					<a href="#"><span><i class="far fa-check-circle fa-lg"></i>내용 확인 및 동의</span></a>
				</li>				
			</ul>
			<a href="service_apply_02.jsp"><button>다음</button></a>
		</form>
	</div>
</div>
<%@ include file="footer.jsp" %>