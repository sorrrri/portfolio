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
				<li class="step">1. 기본 정보 입력</li>
				<li class="step current">2. 인증 정보 입력</li>
				<li class="step">3. 에디션 선택</li>
				<li class="step">4. 신청 완료</li>
			</ol>
			<h2>인증 정보</h2>
			<div class="info">
				<div class="row">
					<div class="title">인증정보<span>(필수)</span></div>
					<div class="input">
						<div class="dropdown">
							<div class="select">
								<span>선택하세요</span>
								<i class="fa fa-chevron-left"></i>
							</div>
							<input type="hidden" name="">
							<ul class="dropdown-menu">
								<li>ISO 9001</li>
								<li>ISO 14001</li>
								<li>IATF 16949</li>
								<li>ISO 27001</li>
								<li>ISO 22000</li>
								<li>ISO 37001</li>
								<li>ISO 45001</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="title">인증기관<span>(필수)</span></div>
					<div class="input">
						<input type="text" />
					</div>
				</div>
				<div class="row">
					<div class="title">컨설턴트</div>
					<div class="input">
						<input type="text" placeholder="예) 홍길동" />
					</div>
				</div>
				<div class="row">
					<div class="title">소속기관</div>
					<div class="input">
						<input type="text" placeholder="예) 한국품질재단" />
					</div>
				</div>
			</div>
			
			<!-- <h2>추가1 <i class="fas fa-minus-circle"> 삭제</i></h2>
			<h4>신청하시는 경영시스템의 정보를 입력해 주세요</h4>
			<div class="info">
				<div class="row">
					<div class="title">경영시스템<span>(필수)</span></div>
					<div class="input">
						<div class="dropdown">
							<div class="select">
								<span>선택하세요</span>
								<i class="fa fa-chevron-left"></i>
							</div>
							<input type="hidden" name="">
							<ul class="dropdown-menu">
								<li id="Basic">Basic</li>
								<li id="Premium">Premium</li>
								<li id="Enterprise">Enterprise</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="title">인증기관<span>(필수)</span></div>
					<div class="input">
						<input type="text" />
					</div>
				</div>
				<div class="row">
					<div class="title">컨설턴트</div>
					<div class="input">
						<input type="text" />
					</div>
				</div>
				<div class="row">
					<div class="title">소속기관</div>
					<div class="input">
						<input type="text" />
					</div>
				</div>
			</div> -->
			<a class="add" href="#"><i class="fas fa-plus-circle"></i>인증 정보 추가</a>
			<a href="service_apply.jsp"><button class="prev">이전</button></a>
			<a href="service_apply_03.jsp"><button>다음</button></a>
		</form>
	</div>
</div>
<%@ include file="footer.jsp" %>