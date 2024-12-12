-- there is no gifts with 'read' category in database, it is beter to sum purchases for other categories like art or travel
-- but the query should be, like this:
SELECT cgp.customer_id, sum(cgp.retail_price) 
FROM customer_gift_purchases as cgp
INNER JOIN gifts as g ON cgp.gift_id = g.gift_id
INNER JOIN gift_categories as gc ON g.gift_category_id = gc.gift_category_id
WHERE gc.name = 'read' and cgp.customer_id = '20'