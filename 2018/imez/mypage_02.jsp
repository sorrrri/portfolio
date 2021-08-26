<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="header.jsp" %>
<div class="sub mypage mypage_02">
	<div class="section section_01">
		<div class="title">My iMEZ</div>
	</div>
	<div class="section section_02 wrapper">
		<ul class="menu">
			<li><a href="mypage.jsp">My iMEZ<i class="fas fa-chevron-right"></i></a></li>
			<li class="active"><a href="mypage_02.jsp">담당자 정보<i class="fas fa-chevron-right"></i></a></li>
			<li><a href="mypage_03.jsp">회사 정보<i class="fas fa-chevron-right"></i></a></li>
		</ul>
		<div class="content">
			<h3>담당자 정보</h3>
			<h4>정보를 수정 후 저장 버튼은 클릭하면 수정한 정보가 저장됩니다. (단 비밀번호는 변경 시 바로 저장됩니다.)</h4>
			<div class="table" style="margin-bottom:3em">
				<div class="row">
					<div class="cell th">이름</div>
					<div class="cell"><input type="text" value="홍길동" /></div>
					<div class="cell th">이메일</div>
					<div class="cell"><input type="text" value="imezadmin@imez.co.kr" /></div>
				</div>
				<div class="row">
					<div class="cell th">부서</div>
					<div class="cell"><input type="text" value="품질경영관리팀" /></div>
					<div class="cell th">비밀번호</div>
					<div class="cell"><input type="password" value="12345678" /><button>변경</button></div>
				</div>
				<div class="row">
					<div class="cell th">직급</div>
					<div class="cell"><input type="text" value="부장" /></div>
					<div class="cell th">전화/모바일</div>
					<div class="cell"><input type="text" value="02-000-0000/010-0000-0000" /></div>
				</div>
			</div>
		</div>
	</div>
</div>
<%@ include file="footer.jsp" %>