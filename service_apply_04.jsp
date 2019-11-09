<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="header.jsp" %>
<div class="sub service_apply service_apply_04">
	<div class="section section_01">
		<div class="title">서비스 신청</div>
	</div>
	<div class="section section_02">
		<h1>서비스 신청</h1>
		<div class="deco"></div>
		<form class="wrapper">
			<ol class="stepBar step4">
				<li class="step">1. 기본 정보 입력</li>
				<li class="step">2. 인증 정보 입력</li>
				<li class="step">3. 에디션 선택</li>
				<li class="step current">4. 신청 완료</li>
			</ol>
			<h2>담당자 정보</h2>
			<div class="info">
				<div class="row">
					<div class="title">이름</div>
					<div class="input">홍길동</div>
				</div>
				<div class="row">
					<div class="title">이메일</div>
					<div class="input">gildonghong@imez.com</div>
				</div>
				<div class="row">
					<div class="title">부서/직급</div>
					<div class="input">표준경영관리팀/부장</div>
				</div>
				<div class="row">
					<div class="title">신청경로</div>
					<div class="input">인터넷</div>
				</div>
			</div>
			<h2>회사 정보</h2>
			<div class="info">
				<div class="row">
					<div class="title">회사명</div>
					<div class="input">(주)지에이치소프트</div>
				</div>
				<div class="row">
					<div class="title">기업분류</div>
					<div class="input">제조</div>
				</div>
				<div class="row">
					<div class="title">연락처</div>
					<div class="input">000-000-0000</div>
				</div>
				<div class="row">
					<div class="title">주소</div>
					<div class="input">경기도 용인시 수지구 신수로 767 A동 지식산업센터 604호 (분당수지 U-TOWER)</div>
				</div>
				<div class="row">
					<div class="title">사업자등록번호</div>
					<div class="input">000-00-00000</div>
				</div>
			</div>
			<h2>인증 정보</h2>
			<div class="info">
				<div class="row">
					<div class="title">인증정보</div>
					<div class="input">ISO 9001:2015</div>
				</div>
				<div class="row">
					<div class="title">인증기관</div>
					<div class="input">한국품질재단</div>
				</div>
				<div class="row">
					<div class="title">컨설턴트</div>
					<div class="input">홍길동</div>
				</div>
				<div class="row">
					<div class="title">소속기관</div>
					<div class="input">한국품질재단</div>
				</div>
			</div>			
			<h2>에디션 정보</h2>
			<div class="info">
				<div class="row">
					<div class="title">에디션</div>
					<div class="input">Basic</div>
				</div>
				<div class="row">
					<div class="title">사용자</div>
					<div class="input">30명</div>
				</div>
				<div class="row">
					<div class="title">서비스 용량</div>
					<div class="input">기본 용량 20GB</div>
				</div>
			</div>
			<a href="service_apply_03.jsp"><button class="prev">이전</button></a>
			<a href="#"><button>신청완료</button></a>
		</form>
	</div>
</div>
<%@ include file="footer.jsp" %>