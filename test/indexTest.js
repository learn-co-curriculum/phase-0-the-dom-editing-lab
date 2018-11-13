

describe("within index.html", () => {
  it("contains a <body> tag", () => {
    expect(document.querySelector('html').innerHTML).to.include('<body>')
  })
  it("contains a </body> tag", () => {
    expect(document.querySelector('html').innerHTML).to.include('</body>')
  })
})
