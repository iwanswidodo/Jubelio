// locators.js

export const loginPageLocators = {
    email_field: '#textfield-email',
    password_field: '#textfield-password',
    submit_button: 'button[type="submit"]'
}

export const dashboard = {
    jubelio_logo: 'a[title="Jubelio"]',
    navbar_menu: 'div.header-nav-menu.flex-grow-0.ml-3.d-none.d-lg-block',
    navbar_sub_menu: 'div.flex-grow-1.ml-3'
}

export const dashboardPenjualan = {

    // create
    title: 'div.title-card.w-100',
    right_icon: '[data-testid="ChevronRightIcon"]',
    btn_add: 'button[title="Add"]',
    choose_pelanggan: '[placeholder="Pilih pelanggan"]',
    referensi: '[placeholder="No. ref"]',
    choose_lokasi: '[placeholder="Pilih lokasi"]',
    keterangan: '[placeholder="Masukkan keterangan"]',
    add_product: '.css-1o9xw9j > .MuiButton-root',
    product: '[data-index="0"] > [style="height: 74px;"] > .css-1rjpksd',
    validate_product: '.grid-cell-selected > .grid-cell-content',
    btn_save: 'button[title="save"]',

    // edit
    filter: 'div.MuiTabs-root.css-17m1d61',
    btn_edit: 'button[title="edit"]',

    // search
    btn_search: 'input[name="q"]'
}