// SPDX-FileCopyrightText: 2026 GRAP
//
// SPDX-License-Identifier: AGPL-3.0-or-later

odoo.define("pos_tare.devices", function (require) {
    var ProxyDevice = require("point_of_sale.devices").ProxyDevice;

    ProxyDevice.include({
        message: function (name, params) {
            if (this.scale_read_tare_option !== false && name === "scale_read") {
                params.tare = this.scale_read_tare_option;
            }
            return this._super(name, params);
        },
    });
});
