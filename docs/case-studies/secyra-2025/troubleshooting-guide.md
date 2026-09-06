---
title: Secyra (2025) | Troubleshooting guide
---

<span class="cs-page-kicker">Case studies > Secyra (2025) > Troubleshooting guide</span>

# Troubleshooting: No data appears after connecting Snowflake

After connecting your Snowflake data source, you may notice that data is not populating in the InsightEdge Platform. This usually means the dedicated Snowflake role or service account used for the integration lacks the required privileges.

## Possible Causes

- The InsightEdge Platform service user does not exist in Snowflake.
- The service user exists but is missing the `USAGE` or `SELECT` privileges required to access your data.

## Resolution Steps

1. In the InsightEdge Platform, go to **System Health** and look for a **Missing Permission** alert related to the Snowflake integration. If one exists, open the alert and follow the remediation steps.
2. Go to **Integrations** and confirm that the Snowflake integration displays a **Connected** status in the top-right corner. If it is not connected, re-authenticate before continuing.
3. In Snowflake, verify that the InsightEdge Platform service user exists by running the query:

    ```sql
    SHOW USERS LIKE '<secyra_service_user>';
    ```

    If no record appears, create the user according to your organization's configuration standards.

4. In Snowflake, run one of the following queries to confirm that the service user has `USAGE` privileges on all relevant schemas:

    ```sql
    SHOW GRANTS TO USER <secyra_service_user>;
    ```

    If `USAGE` is missing from the output of a schema, the InsightEdge Platform cannot scan or classify data in that schema.

5. Grant the necessary privileges to enable the InsightEdge Platform to access and read your data:

    ```sql
    -- Allow the InsightEdge Platform to access the database:
    GRANT USAGE ON DATABASE <database_name> TO USER <secyra_service_user>;

    -- Allow the InsightEdge Platform to access the schema:
    GRANT USAGE ON SCHEMA <schema_name> TO USER <secyra_service_user>;

    -- Allow the InsightEdge Platform to read existing tables and views:
    GRANT SELECT ON ALL TABLES IN SCHEMA <schema_name> TO USER <secyra_service_user>;
    GRANT SELECT ON ALL VIEWS IN SCHEMA <schema_name> TO USER <secyra_service_user>;

    -- Ensure future tables and views are accessible:
    GRANT SELECT ON FUTURE TABLES IN SCHEMA <schema_name> TO USER <secyra_service_user>;
    GRANT SELECT ON FUTURE VIEWS IN SCHEMA <schema_name> TO USER <secyra_service_user>;
    ```

6. After granting privileges, trigger a new scan in the InsightEdge Platform to verify that data now appears correctly.

## Additional resources

- [Snowflake Integration](https://link-to-kb/snowflake-integration)
- [System Health](https://link-to-kb/system-health)
- [Alerts](https://link-to-kb/alerts)
- [Integration Best Practices](https://link-to-kb/integration-best-practices)
