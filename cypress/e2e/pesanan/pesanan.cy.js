import login from '../../support/pages/login'
import pesanan from '../../support/pages/penjualan'

describe("Jubelio Test", { testIsolation: true }, () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });

    })

    it("Create and Edit Pesanan", () => {
        const { environment, email, password } = userdata.user_data
        login.login(environment, email, password)
        pesanan.addPesanan()
        pesanan.editPesanan()
    })

    it("Search Pesanan", () => {
        const { environment, email, password } = userdata.user_data
        login.login(environment, email, password)
        pesanan.searchPesanan()
    })

})
