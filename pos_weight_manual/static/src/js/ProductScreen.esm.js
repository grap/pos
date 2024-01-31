/*
Copyright (C) 2024-Today: GRAP (<http://www.grap.coop/>)
@author: Sylvain LE GAL (https://twitter.com/legalsylvain)
License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).
*/

odoo.define("pos_weight_manual.ProductScreen", function (require) {
    const ProductScreen = require("point_of_sale.ProductScreen");
    const Registries = require("point_of_sale.Registries");

    const PosWeightManualProductScreen = (OriginalProductScreen) =>
        class extends OriginalProductScreen {
            get isScaleAvailable() {
                return false;
                // Return ! this.env.pos.iface_weight_manual;
            }
            async _onScaleNotAvailable() {
                console.log("_onScaleNotAvailable");
                const {confirmed, payload} = await this.showTempScreen("ScaleScreen", {
                    product,
                });
                if (confirmed) {
                    weight = payload.weight;
                } else {
                    // Do not add the product;
                    return;
                }
            }
        };

    Registries.Component.extend(ProductScreen, PosWeightManualProductScreen);
});
