<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="header.jsp" %>
<div class="sub cs qna">
	<div class="section section_01">
		<div class="title">공지사항</div>
	</div>
	<div class="section section_02">
		<h1>제휴 문의</h1>
		<h3>비즈니스 성장을 원하십니까? iMEZ와 파트너가 되십시오.</h3>
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
				<h4>이메일 <span>(필수)</span></h4>
				<input type="text" />				
			</div>
			<div>
				<h4>연락처 <span>(필수)</span></h4>
				<input type="text" />				
			</div>
			<div>
				<h4>소속기관</h4>
				<input type="text" />				
			</div>
		</div>
		<button>문의하기</button>
	</div>
</div>
<%@ include file="footer.jsp" %>