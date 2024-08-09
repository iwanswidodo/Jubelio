import { dashboard, dashboardPenjualan } from '../locator/locators';

class DashboardPenjualan {
    addPesanan() {
        // Ensure the Jubelio logo is visible
        cy.getBySel(dashboard.jubelio_logo, { timeout: 10000 }).should('be.visible').hold();

        // Navigate to "Penjualan" and then "Transaksi Penjualan"
        cy.getBySel(dashboard.navbar_menu)
            .contains('Penjualan')
            .should('be.visible')
            .click({ force: true })
            .hold();

        cy.getBySel(dashboard.navbar_sub_menu)
            .contains('Transaksi Penjualan')
            .should('be.visible')
            .click({ force: true })
            .hold();

        // Verify the title and interact with elements
        cy.getBySel(dashboardPenjualan.title)
            .contains('Transaksi Penjualan')
            .should('be.visible');

        cy.getBySel(dashboardPenjualan.right_icon)
            .should('be.visible')
            .click();

        cy.getBySel(dashboardPenjualan.btn_add)
            .should('be.visible')
            .click();

        cy.getBySel(dashboardPenjualan.choose_pelanggan)
            .click()
            .type('BLANJA');
        cy.contains('BLANJA').click();

        cy.getBySel(dashboardPenjualan.referensi)
            .click()
            .type('123456789{enter}', { force: true });

        cy.getBySel(dashboardPenjualan.choose_lokasi)
            .click({ force: true })
            .type('Pusat');
        cy.contains('Pusat').click();

        cy.getBySel(dashboardPenjualan.keterangan)
            .click({ force: true })
            .type('Automation Test');

        cy.getBySel(dashboardPenjualan.add_product)
            .click({ force: true });

        cy.getBySel(dashboardPenjualan.product)
            .click({ force: true });

        cy.getBySel(dashboardPenjualan.validate_product)
            .should('be.visible');

        cy.getBySel(dashboardPenjualan.btn_save)
            .click({ force: true });

        // Verify the title again after saving
        cy.getBySel(dashboardPenjualan.title)
            .contains('Transaksi Penjualan')
            .should('be.visible');
    }

    editPesanan() {
        // Select "Semua" from the filter
        cy.getBySel(dashboardPenjualan.filter)
            .contains('Semua')
            .should('be.visible')
            .click();

        // Save dynamic values to JSON
        cy.saveSeparatedValuesToJson('.d-flex.flex-column.css-1veboq3', 'no_pesanan.json');

        // Load the JSON file
        cy.fixture('no_pesanan.json').then((data) => {
            // Access the data you want to use for the search
            const searchValue = data.data1;
            cy.log(searchValue)

            // Search for the item and select it
            cy.getBySel('.d-flex.flex-column.css-1veboq3')
                .contains(searchValue)
                .should('be.visible')
                .click();

            // Edit the selected item
            cy.getBySel(dashboardPenjualan.btn_edit)
                .should('be.visible')
                .click();

            cy.getBySel(dashboardPenjualan.keterangan)
                .click({ force: true })
                .clear()
                .type('Automation Test Edit');

            cy.getBySel(dashboardPenjualan.btn_save)
                .click({ force: true });

            // Verify the title again after saving
            cy.getBySel(dashboardPenjualan.title)
                .contains('Transaksi Penjualan')
                .should('be.visible');
        });
    }

    searchPesanan() {
        // Ensure the Jubelio logo is visible
        cy.getBySel(dashboard.jubelio_logo, { timeout: 10000 }).should('be.visible').hold();

        // Navigate to "Penjualan" and then "Transaksi Penjualan"
        cy.getBySel(dashboard.navbar_menu)
            .contains('Penjualan')
            .should('be.visible')
            .click({ force: true })
            .hold();

        cy.getBySel(dashboard.navbar_sub_menu)
            .contains('Transaksi Penjualan')
            .should('be.visible')
            .click({ force: true })
            .hold();

        // Verify the title and interact with elements
        cy.getBySel(dashboardPenjualan.title)
            .contains('Transaksi Penjualan')
            .should('be.visible');

        cy.getBySel(dashboardPenjualan.right_icon)
            .should('be.visible')
            .click();

        // Select "Semua" from the filter
        cy.getBySel(dashboardPenjualan.filter)
            .contains('Semua')
            .should('be.visible')
            .click();

        // Load the JSON file
        cy.fixture('no_pesanan.json').then(({ data1 }) => {
            cy.log(data1); // Log the search value for debugging

            // Type the search value into the search input and submit
            cy.getBySel(dashboardPenjualan.btn_search)
                .type(`${data1}{enter}`);

            // Validate that the result is visible and click it
            cy.getBySel('.d-flex.flex-column.css-1veboq3')
                .contains(data1)
                .should('be.visible')
                .click()
                .hold(3)
        });
    }
}

export default new DashboardPenjualan();
