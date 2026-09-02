<span class="cs-page-kicker">Case Studies > Secyra (2025) > Knowledge base article</span>

# Managing Classifications

The InsightEdge Platform automatically classifies sensitive data across your connected datastores. You can manually manage and update these classifications to ensure accuracy and align with your organization's policies.

**Managing classifications** lets you add, change, remove, or restore data classifications at the *column level* within a structured data table. Adjusting these assignments improves data accuracy and helps the InsightEdge Platform refine its automatic classification engine.

!!! note "Classification updates are queued and may take several hours to appear."

## Access the feature

1. In the InsightEdge Platform, go to **Datastores**.
2. Select the datastore whose classifications you want to modify.
3. Under the **Classified Data** tab, click a database to open its classification view.

The classification view contains two panes:

- **Table Details** — shows metadata such as *Datastore*, *Database*, *Creation date*, *Created by*, *Last accessed*, and *Sensitive records*.
- **Columns table** — lists each column and its *Column Name*, *Data Class*, *Record count*, and *Sample Data*.

From here, you can **add**, **change**, **remove**, or **restore** a classification.

## Add a classification

If a column is unclassified, you can manually assign a data class.

1. In the **Columns** table, locate a column whose **Data Class** is *Unclassified*.

    !!! idea "Toggle **View entire schema** to display all columns."

2. Hover over the column and click **Edit Classifications**.
3. In the modal, select a data class from the **Data Class** dropdown.
4. Click **Update Classification**.

## Change a classification

You can update an existing classification when a column's data type or sensitivity has changed, or when a previous classification was incorrect.

1. In the **Columns** table, hover over the column whose classification you want to change.
2. Click **Edit Classifications**.
3. In the modal, select the new data class from the **Data Class** dropdown.
4. Click **Update Classification**.

## Remove a classification

You can remove a classification if the column no longer contains sensitive data or has been deprecated.

1. In the **Columns** table, hover over the column whose classification you want to remove.
2. Click **Edit Classifications**.
3. In the modal, click the **X** next to the **Data Class** dropdown.
4. Click **Update Classification**.

## Restore a classification

You can restore a previous classification if a recent change was made in error or to compare the dataset's previous classification state.

1. At the top of the classification view, click **Classification Edits** to open the edit history.
2. Review the list of changes made to the object's classifications.
3. Locate the record you want to revert and click **Restore**.

## Additional resources

- [Classification](https://link-to-kb/classification) – About the InsightEdge Platform's classification engine
- [Data Class](https://link-to-kb/data-class) – Learn more about Data Class types in the InsightEdge Platform
