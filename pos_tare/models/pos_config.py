from odoo import fields, models


class PosConfig(models.Model):
    _inherit = "pos.config"

    iface_tare_method = fields.Selection(
        [
            ("manual", "Input the tare manually"),
            ("barcode", "Scan a barcode to set the tare"),
            ("both", "Manual input and barcode"),
        ],
        string="Tare Input Method",
        default="both",
        required=True,
        help="Select tare method:\n"
        "* 'manual' : the scale screen has an extra tare input field;\n"
        "* 'barecode' : (scan a barcode to tare the selected order line;\n"
        "* 'both' : manual input and barcode methods are enabled;",
    )

    iface_gross_weight_method = fields.Selection(
        [
            ("manual", "Input the Gross Weight manually"),
            ("scale", "Input Gross Weight via Scale"),
        ],
        string="Gross Weight Input Method",
        default="scale",
        required=True,
    )
