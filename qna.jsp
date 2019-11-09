<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="header.jsp" %>
<div class="sub cs qna">
	<div class="section section_01">
		<div class="title">공지사항</div>
	</div>
	<div class="section section_02">
		<h1>서비스 문의</h1>
		<h3>iMEZ에 궁금한 점을 문의하시면, 빠른 시간 내에 친절하게 답변해 드립니다.</h3>
	</div>
	<div class="section section_03 wrapper">
		<div class="info">
			<div>
				<h4>문의 제목 <span>(필수)</span></h4>
				<input type="text" />
			</div>
			<div>
				<h4>문의 내용을 입력해주세요.(500자 이내) <span>(필수)</span></h4>
				<textarea ></textarea>
			</div>
		</div>
		<div class="info info_02">
			<div>
				<h4>이름 <span>(필수)</span></h4>
				<input type="text" placeholder="(성)홍" style="float:left; width:48%" />		
				<input type="text" placeholder="(이름)길동" style="float:right; width:48%" />			
			</div>
			<div>
				<h4>회사명 <span>(필수)</span></h4>
				<input type="text" />
			</div>
			<div>
				<h4>연락처 <span>(필수)</span></h4>
				<input type="text" />				
			</div>
			<div>
				<h4>직원 수 <span>(필수)</span></h4>
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
			<div>
				<h4>이메일 <span>(필수)</span></h4>
				<input type="text" />				
			</div>
			<div>
				<h4>향후 iMEZ 관련 안내 정보를 수신하시겠습니까?</h4>
				<input type="radio" /> 예
				<input type="radio" /> 아니오			
			</div>
		</div>
		<button>문의하기</button>
	</div>
</div>
<%@ include file="footer.jsp" %>