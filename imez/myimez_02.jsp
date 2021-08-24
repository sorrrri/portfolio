<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="header.jsp" %>
<div class="sub myimez">
	<div class="section section_01">
		<div class="title">My iMEZ</div>
	</div>
	<div class="section section_02 wrapper">
		<ul class="menu">
			<li><a href="myimez.jsp">My iMEZ<i class="fas fa-chevron-right"></i></a></li>
			<li class="active"><a href="myimez_02.jsp">담당자 정보<i class="fas fa-chevron-right"></i></a></li>
			<li><a href="myimez_03.jsp">회사 정보<i class="fas fa-chevron-right"></i></a></li>
		</ul>
		<div class="content">
			<h1>My iMEZ</h1>
			<ul>
				<li>・ Edition : <h3>Small Edition</h3></li>
				<li>・ 사용자 : <h3>30명</h3></li>
				<li>・ Storage : <h3>20 GB</h3></li>
				<li>・ 결제 금액 : <h3>500만원</h3></li>
			</ul>
			<table style="margin-bottom:3em">
				<tr>
					<th>신청일</th>
					<td colspan="3">2018-03-07</td>
				</tr>
				<tr>
					<th>사용 시작일</th>
					<td colspan="3">2018-04-01</td>
				</tr>
				<tr>
					<th>종료 예정일</th>
					<td colspan="3">2019-03-31</td>
				</tr>
				<tr>
					<th>접속 정보</th>
					<td colspan="3">http://test.imez.co.kr</td>
				</tr>
				<tr>
					<th>관리자 ID</th>
					<td>imezadmin@imez.co.kr</td>
					<th>관리자 비밀번호</th>
					<td>admin0522</td>
				</tr>
			</table>
			<ul>
				<li>・ 인증정보</li>
			</ul>
			<table>
				<tr>
					<th>경영시스템</th>
					<td>ISO 9001:2015</td>
					<th>상태</th>
					<td>신청 완료</td>
				</tr>
				<tr>
					<th>인증 기관</th>
					<td colspan="3">(재) 한국품질재단</td>
				</tr>
				<tr>
					<th>컨설턴트</th>
					<td colspan="3">이순신, 윤봉길</td>
				</tr>
				<tr>
					<th>소속 기관</th>
					<td colspan="3">(재) 한국품질재단</td>
				</tr>
				<tr>
					<th>구축일</th>
					<td colspan="3">&nbsp;</td>
				</tr>
			</table>
		</div>
	</div>
</div>
<%@ include file="footer.jsp" %>