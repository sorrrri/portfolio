<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="header.jsp" %>
<div class="sub service_apply service_apply_03">
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
				<li class="step current">3. 에디션 선택</li>
				<li class="step">4. 신청 완료</li>
			</ol>
			<h2>에디션 선택</h2>
			<ul class="select">
				<li>
					<div class="dropdown">
						<div class="select">
							<span>선택하세요</span>
							<i class="fa fa-chevron-left"></i>
						</div>
						<input type="hidden" name="">
						<ul class="dropdown-menu">
							<li>Basic</li>
							<li>Premium</li>
							<li>Enterprise</li>
						</ul>
					</div>
				</li>
				<li>사용자 : 30명</li>
				<li>서비스 용량 : 20 GB</li>
				<li class="date">시작일 지정 : <span><i class="far fa-calendar-alt"></i>2018-04-01</span></li>
			</ul>
			<div class="edition">
				<ul>
					<li>
						<h3>200만원 / 1년</h3>
						<div><i class="fas fa-laptop fa-3x"></i>1년</div>
						<input type="radio" name="edition" />
					</li>
					<li>
						<h3>300만원 / 1년</h3>
						<div><i class="fas fa-laptop fa-3x"></i>1년</div>
						<input type="radio" name="edition" />
					</li>
					<li>
						<h3>600만원 / 1년</h3>
						<div><i class="fas fa-laptop fa-3x"></i>1년</div>
						<input type="radio" name="edition" />
					</li>
				</ul>
			</div>
			<a href="service_apply_02.jsp"><button class="prev">이전</button></a>
			<a href="service_apply_04.jsp"><button>다음</button></a>
		</form>
	</div>
</div>
<%@ include file="footer.jsp" %>