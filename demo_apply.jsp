<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="header.jsp" %>
<div class="sub service_apply demo">
	<div class="section section_01">
		<div class="title">상담 및 데모 신청</div>
	</div>
	<div class="section section_02">
		<h1>상담 및 데모 신청</h1>
		<div class="deco"></div>
		<form class="wrapper">
			<h4>iMEZ 서비스 신청을 위해 기본정보를 입력해주세요.</h4>
			<div class="info">
				<div class="row">
					<div class="title">이름<span>(필수)</span></div>
					<div class="input">
						<input type="text" placeholder="(성) 홍" />
						<input type="text" placeholder="(이름) 길동" />
					</div>
				</div>
				<div class="row">
					<div class="title">연락처<span>(필수)</span></div>
					<div class="input">
						<input type="text" placeholder="예) 02-000-0000" />
					</div>
				</div>
				<div class="row">
					<div class="title">이메일<span>(필수)</span></div>
					<div class="input">
						<input type="text" />
					</div>
				</div>
				<div class="row">
					<div class="title">회사명<span>(필수)</span></div>
					<div class="input">
						<input type="text" />
					</div>
				</div>
				<div class="row">
					<div class="title">부서/직급<span>(필수)</span></div>
					<div class="input">
						<input type="text" placeholder="" />
					</div>
				</div>
				<div class="row">
					<div class="title">직원 수<span>(필수)</span></div>
					<div class="input">
						<div class="dropdown">
							<div class="select">
								<span>선택하세요</span>
								<i class="fa fa-chevron-left"></i>
							</div>
							<input type="hidden" name="">
							<ul class="dropdown-menu">
								<li>10명 미만</li>
								<li>30명 미만</li>
								<li>50명 미만</li>
								<li>100명 미만</li>
								<li>300명 미만</li>
								<li>500명 미만</li>
								<li>500명 이상</li>
							</ul>
						</div>
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
				<div class="row">
					<div class="title">데모를 신청하시겠습니까?<span>(필수)</span></div>
					<div class="input">
						<label><input type="radio" name="demo_try2" />예</label>
						<label><input type="radio" name="demo_try2" />아니오</label>
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
			<a href="service_apply_02.jsp"><button>신청하기</button></a>
		</form>
	</div>
</div>
<%@ include file="footer.jsp" %>