describe("메인 페이지 테스트", () => {
  it("앱 시작", () => {
    cy.exec("npm run start");
  });
  it("메인 페이지 접속", () => {
    cy.visit("/");
  });
  it("1. header에 마우스 오버", () => {
    cy.get("[data-cy=GnbMenu]").click();
  });
});
