from odoo import fields, models


class PosConfig(models.Model):
    _inherit = "pos.config"

    iface_weight_manual = fields.Boolean(string="Manual Weight Entry")
