// PURCHASE REQUEST
var v1PurchaseRequestPostedRouter = require('../src/routers/v1/purchase-request/purchase-request-posted-router');
var v1PurchaseRequestPostRouter = require('../src/routers/v1/purchase-request/purchase-request-post-router');
var v1PurchaseRequestByUserRouter = require('../src/routers/v1/purchase-request/purchase-request-by-user-router');
var v1PurchaseRequestMonitoringRouter = require('../src/routers/v1/purchase-request/purchase-request-monitoring-router');
var v1PurchaseRequestRouter = require('../src/routers/v1/purchase-request/purchase-request-router');
// PURCHASE ORDER
var v1PurchaseOrderSplitRouter = require('../src/routers/v1/purchase-order/purchase-order-split-router');
var v1POMonitoringRouter = require('../src/routers/v1/purchase-order/purchase-order-monitoring-router');
var v1PurchaseOrderUnpostedRouter = require('../src/routers/v1/purchase-order/purchase-order-un-posted-router');
var v1PurchaseOrderByUserRouter = require('../src/routers/v1/purchase-order/purchase-order-by-user-router');
var v1ReportPoCategoryPeriodeRouter = require('../src/routers/v1/purchase-order/reports/purchase-order-report-category-router');
var v1ReportPoUnitPeriodeRouter = require('../src/routers/v1/purchase-order/reports/purchase-order-report-unit-router');
var v1ReportPoSubUnitCategoriesPeriodeRouter = require('../src/routers/v1/purchase-order/reports/purchase-order-report-unit-category-router');
var v1ReportPoSubUnitPeriodeRouter = require('../src/routers/v1/purchase-order/reports/purchase-order-report-sub-unit-router');
var v1PurchaseOrderRouter = require('../src/routers/v1/purchase-order/purchase-order-router');
// PURCHASE ORDER EXTERNAL
var v1PurchaseOrderExternalPostRouter = require('../src/routers/v1/purchase-order-external/purchase-order-external-post-router');
var v1PurchaseOrderExternalsUnpostedRouter = require('../src/routers/v1/purchase-order-external/purchase-order-external-posted-router');
var v1PurchaseOrderExternalByUserRouter = require('../src/routers/v1/purchase-order-external/purchase-order-external-by-user-router');
var v1PurchaseOrderExternalRouter = require('../src/routers/v1/purchase-order-external/purchase-order-external-router');
var v1PurchaseOrderExternalCancelRouter = require('../src/routers/v1/purchase-order-external/purchase-order-external-cancel-router');
var v1PurchaseOrderExternalUnpostRouter = require('../src/routers/v1/purchase-order-external/purchase-order-external-unpost-router');
var v1PurchaseOrderExternalCloseRouter = require('../src/routers/v1/purchase-order-external/purchase-order-external-close-router');
// DELIVERY ORDER
var v1DOMonitoringByUserRouter = require('../src/routers/v1/delivery-order/delivery-order-monitoring-by-user-router');
var v1DOMonitoringRouter = require('../src/routers/v1/delivery-order/delivery-order-monitoring-router');
var v1DeliveryOrderBySupplierRouter = require('../src/routers/v1/delivery-order/delivery-order-by-supplier-router');
var v1DeliveryOrderByUserRouter = require('../src/routers/v1/delivery-order/delivery-order-by-user-router');
var v1DeliveryOrderRouter = require('../src/routers/v1/delivery-order/delivery-order-router');
// UNIT RECEIPT NOTE
var v1UnitReceiptNoteMonitoringByUserRouter = require('../src/routers/v1/unit-receipt-note/unit-receipt-note-monitoring-by-user-router');
var v1UnitReceiptNoteMonitoringRouter = require('../src/routers/v1/unit-receipt-note/unit-receipt-note-monitoring-router');
var v1UnitReceiptNoteByUserRouter = require('../src/routers/v1/unit-receipt-note/unit-receipt-note-by-user-router');
var v1UnitPaymentOrderSupplierRouter = require('../src/routers/v1/unit-receipt-note/unit-receipt-note-suplier-unit-router');
var v1UnitReceiptNoteRouter = require('../src/routers/v1/unit-receipt-note/unit-receipt-note-router');
// UNIT PAYMENT NOTE
var v1UnitPaymentPriceCorrectionNoteByUserRouter = require('../src/routers/v1/unit-payment-note/unit-payment-price-correction-note-by-user-router');
var v1UnitPaymentPriceCorrectionReturNoteRouter = require('../src/routers/v1/unit-payment-note/unit-payment-price-correction-retur-note-router');
var v1UnitPaymentPriceCorrectionNoteRouter = require('../src/routers/v1/unit-payment-note/unit-payment-price-correction-note-router');
var v1UnitPaymentQuantityCorrectionNoteByUserRouter = require('../src/routers/v1/unit-payment-note/unit-payment-quantity-correction-note-by-user-router');
var v1UnitPaymentQuantityCorrectionReturNoteRouter = require('../src/routers/v1/unit-payment-note/unit-payment-quantity-correction-retur-note-router');
var v1UnitPaymentQuantityCorrectionNoteRouter = require('../src/routers/v1/unit-payment-note/unit-payment-quantity-correction-note-router');
var v1UnitPaymentOrderByUserRouter = require('../src/routers/v1/unit-payment-note/unit-payment-order-by-user-router'); 
var v1UnitPaymentOrderRouter = require('../src/routers/v1/unit-payment-note/unit-payment-order-router');

 module.exports = function(server) {
    //PURCHASE REQUEST
    v1PurchaseRequestPostedRouter().applyRoutes(server,                     "/v1/purchase-requests/posted");
    v1PurchaseRequestPostRouter().applyRoutes(server,                       "/v1/purchase-requests/post");
    v1PurchaseRequestByUserRouter().applyRoutes(server,                     "/v1/purchase-requests/by-user");
    v1PurchaseRequestMonitoringRouter().applyRoutes(server,                 "/v1/purchase-requests/monitoring");
    v1PurchaseRequestRouter().applyRoutes(server,                           "/v1/purchase-requests");
    //PURCHASE ORDER
    v1PurchaseOrderSplitRouter().applyRoutes(server,                        "/v1/purchase-orders/split");
    v1POMonitoringRouter().applyRoutes(server,                              "/v1/purchase-orders/monitoring");
    v1PurchaseOrderUnpostedRouter().applyRoutes(server,                     "/v1/purchase-orders/unposted");
    v1PurchaseOrderByUserRouter().applyRoutes(server,                       "/v1/purchase-orders/by-user");
    v1ReportPoCategoryPeriodeRouter().applyRoutes(server,                   "/v1/purchase-orders/reports/categories");
    v1ReportPoUnitPeriodeRouter().applyRoutes(server,                       "/v1/purchase-orders/reports/units");
    v1ReportPoSubUnitCategoriesPeriodeRouter().applyRoutes(server,          "/v1/purchase-orders/reports/units-categories");
    v1ReportPoSubUnitPeriodeRouter().applyRoutes(server,                    "/v1/purchase-orders/reports/subUnits");
    v1PurchaseOrderRouter().applyRoutes(server,                             "/v1/purchase-orders");
    //PURCHASE ORDER EXTERNAL
    v1PurchaseOrderExternalPostRouter().applyRoutes(server,                 "/v1/purchase-orders/externals/post");
    v1PurchaseOrderExternalsUnpostedRouter().applyRoutes(server,            "/v1/purchase-orders/externals/posted"); 
    v1PurchaseOrderExternalByUserRouter().applyRoutes(server,               "/v1/purchase-orders/externals/by-user");
    v1PurchaseOrderExternalRouter().applyRoutes(server,                     "/v1/purchase-orders/externals");
    v1PurchaseOrderExternalCancelRouter().applyRoutes(server,               "/v1/purchase-orders/externals/cancel");
    v1PurchaseOrderExternalUnpostRouter().applyRoutes(server,               "/v1/purchase-orders/externals/unpost");
    v1PurchaseOrderExternalCloseRouter().applyRoutes(server,                "/v1/purchase-orders/externals/close");
    //DELIVERY ORDER
    v1DOMonitoringByUserRouter().applyRoutes(server,                        "/v1/delivery-orders/monitoring/by-user");
    v1DOMonitoringRouter().applyRoutes(server,                              "/v1/delivery-orders/monitoring");
    v1DeliveryOrderBySupplierRouter().applyRoutes(server,                   "/v1/delivery-orders/by-supplier");
    v1DeliveryOrderByUserRouter().applyRoutes(server,                       "/v1/delivery-orders/by-user");
    v1DeliveryOrderRouter().applyRoutes(server,                             "/v1/delivery-orders");
    //UNIT RECEIPT NOTE
    v1UnitReceiptNoteMonitoringByUserRouter().applyRoutes(server,           "/v1/unit-receipt-notes/monitoring/by-user");
    v1UnitReceiptNoteMonitoringRouter().applyRoutes(server,                 "/v1/unit-receipt-notes/monitoring");
    v1UnitReceiptNoteByUserRouter().applyRoutes(server,                     "/v1/unit-receipt-notes/by-user");
    v1UnitPaymentOrderSupplierRouter().applyRoutes(server,                  "/v1/unit-receipt-notes/by-suplier-unit");
    v1UnitReceiptNoteRouter().applyRoutes(server,                           "/v1/unit-receipt-notes");
    //UNIT PAYMENT NOTE
    v1UnitPaymentPriceCorrectionNoteByUserRouter().applyRoutes(server,      "/v1/unit-payment-orders/corrections/prices/by-user");  
    v1UnitPaymentPriceCorrectionReturNoteRouter().applyRoutes(server,       "/v1/unit-payment-orders/corrections/prices/retur"); 
    v1UnitPaymentPriceCorrectionNoteRouter().applyRoutes(server,            "/v1/unit-payment-orders/corrections/prices");
    v1UnitPaymentQuantityCorrectionNoteByUserRouter().applyRoutes(server,   "/v1/unit-payment-orders/corrections/quantities/by-user");  
    v1UnitPaymentQuantityCorrectionReturNoteRouter().applyRoutes(server,    "/v1/unit-payment-orders/corrections/quantities/retur"); 
    v1UnitPaymentQuantityCorrectionNoteRouter().applyRoutes(server,         "/v1/unit-payment-orders/corrections/quantities");
    v1UnitPaymentOrderByUserRouter().applyRoutes(server,                    "/v1/unit-payment-orders/by-user");
    v1UnitPaymentOrderRouter().applyRoutes(server,                          "/v1/unit-payment-orders");
 };