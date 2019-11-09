<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="header.jsp" %>
<div class="sub mypage mypage_03">
	<div class="section section_01">
		<div class="title">My iMEZ</div>
	</div>
	<div class="section section_02 wrapper">
		<ul class="menu">
			<li><a href="mypage.jsp">My iMEZ<i class="fas fa-chevron-right"></i></a></li>
			<li><a href="mypage_02.jsp">담당자 정보<i class="fas fa-chevron-right"></i></a></li>
			<li class="active"><a href="mypage_03.jsp">회사 정보<i class="fas fa-chevron-right"></i></a></li>
		</ul>
		<div class="content">
			<h3>회사 정보</h3>
			<h4>로고 이미지의 최적 사이즈는 가로 140pixel, 세로 18pixel입니다. (png파일만 등록이 가능합니다.)</h4>
			<div class="ci"><img src="img/logo_ghsoft.png" alt="" /></div>
			<div class="table" style="margin-bottom:3em">
				<div class="row">
					<div class="cell th">회사명</div>
					<div class="cell"><input type="text" value="(주)지에이치소프트" /></div>
				</div>
				<div class="row">
					<div class="cell th">영문 회사명</div>
					<div class="cell"><input type="text" value="GHSoft" /></div>
				</div>
				<div class="row">
					<div class="cell th">기업 분류</div>
					<div class="cell"><input type="text" value="홍길동" /></div>
				</div>
				<div class="row">
					<div class="cell th">사업자 번호</div>
					<div class="cell"><input type="password" value="000-00-00000" /></div>
				</div>
				<div class="row">
					<div class="cell th">주소</div>
					<div class="cell"><input type="text" value="경기도 용인시 수지구 신수로 767 A동 지식산업센터 604호 (분당수지 U-TOWER)" /></div>
				</div>
				<div class="row">
					<div class="cell th">전화/모바일</div>
					<div class="cell">
						<input type="text" value="02-000-0000" />
						<input type="text" value="010-0000-0000" />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<%@ include file="footer.jsp" %>