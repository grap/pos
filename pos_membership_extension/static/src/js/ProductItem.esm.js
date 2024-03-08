odoo.define("pos_membership_extension.ProductItem", function (require) {
    const ProductItem = require("point_of_sale.ProductItem");
    const Registries = require("point_of_sale.Registries");

    const OverloadProductItem = (OriginalProductItem) =>
        class extends OriginalProductItem {
            get membership_allowed() {
                var res = this.props.product.get_membership_allowed(
                    this.env.pos.get_order().partner
                );
                return res;
            }
        };

    Registries.Component.extend(ProductItem, OverloadProductItem);

    return ProductItem;
});
