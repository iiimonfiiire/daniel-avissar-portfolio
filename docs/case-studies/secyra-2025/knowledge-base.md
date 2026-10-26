---
title: Secyra (2025) | Knowledge base article
---

<span class="cs-page-kicker">Case studies > Secyra (2025) > Knowledge base article</span>

# Manage classifications

The InsightEdge Platform automatically classifies sensitive data across your connected datastores. You can manage these classifications by hand to keep them accurate and aligned with your organization's policies.

**Managing classifications** lets you add, change, remove, or restore data classifications at the *column level* within a structured data table. Adjusting these assignments improves data accuracy and helps the InsightEdge Platform refine its automatic classification engine.

## Before you begin

- **Structured datastore** – Connect at least one structured datastore to the InsightEdge Platform. You can only manage classifications in structured data tables.
- **Processing time** – The InsightEdge Platform queues classification updates, so they can take several hours to appear.

## Access the feature

1. In the InsightEdge Platform, go to **Datastores**.
2. Select the datastore whose classifications you want to modify.
3. Under the **Classified Data** tab, click a database to open its classification view.

The classification view contains two panes:

- **Table Details** – Shows metadata such as *Datastore*, *Database*, *Creation date*, *Created by*, *Last accessed*, and *Sensitive records*.
- **Columns table** – Lists each column and its *Column Name*, *Data Class*, *Record count*, and *Sample Data*.

From here, you can **add**, **change**, **remove**, or **restore** a classification.

## Add a classification

Assign a data class by hand to any column that has no classification yet.

1. In the **Columns** table, locate a column whose **Data Class** is *Unclassified*.

    !!! idea "Toggle **View entire schema** to display all columns."

2. Hover over the column and click **Edit Classifications**.
3. In the modal, select a data class from the **Data Class** dropdown.
4. Click **Update Classification**.

## Change a classification

Update a classification when a column's data type or sensitivity changes. Also update it when the previous classification is wrong.

1. In the **Columns** table, hover over the column whose classification you want to change.
2. Click **Edit Classifications**.
3. In the modal, select the new data class from the **Data Class** dropdown.
4. Click **Update Classification**.

## Remove a classification

Remove a classification when the column no longer contains sensitive data, or when your team retires the column.

1. In the **Columns** table, hover over the column whose classification you want to remove.
2. Click **Edit Classifications**.
3. In the modal, click the **X** next to the **Data Class** dropdown.
4. Click **Update Classification**.

## Restore a classification

Restore a previous classification to undo a mistaken change. You can also restore one to compare the dataset with its earlier classification state.

1. At the top of the classification view, click **Classification Edits** to open the edit history.
2. Review the list of changes made to the object's classifications.
3. Locate the record you want to revert and click **Restore**.

## Verify your changes

After the update completes, check the **Data Class** column in the **Columns** table for the new value. To review every change, click **Classification Edits**.

## Additional resources

- [Classification](https://link-to-kb/classification) – About the InsightEdge Platform's classification engine
- [Data Class](https://link-to-kb/data-class) – Learn more about Data Class types in the InsightEdge Platform
