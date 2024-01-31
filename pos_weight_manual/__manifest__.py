# Copyright (C) 2024-Today: GRAP (<http://www.grap.coop/>)
# @author: Sylvain LE GAL (https://twitter.com/legalsylvain)
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

{
    "name": "Point Of Sale - Manual Weight",
    "summary": "Allows Manual Weight Entry",
    "version": "16.0.1.0.0",
    "category": "Point of Sale",
    "author": "GRAP, Odoo Community Association (OCA)",
    "website": "https://github.com/OCA/pos",
    "license": "AGPL-3",
    "maintainers": ["legalsylvain"],
    "depends": ["point_of_sale"],
    "data": [
        # "views/view_pos_config.xml",
    ],
    # "qweb": [
    #     "static/src/xml/pos_tare.xml",
    # ],
    "assets": {
        "point_of_sale.assets": [
            # 'pos_weight_manual/static/src/js/ProductScreen.esm.js',
        ],
    },
    "installable": True,
}
