---
title: Secyra (2025) | Microcopy
---

<span class="cs-page-kicker">Case studies > Secyra (2025) > Microcopy for alert</span>

# Missing Google OAuth 2.0 Scopes

## Description

**InsightEdge-role** is missing the required Google OAuth 2.0 scopes needed for data scanning. This prevents the InsightEdge Platform from accessing certain data sources and may result in incomplete coverage.

## Remediation

1. In the Google Admin console, go to **Main menu ☰** > **Security** > **Access and data control** > **API controls**.
2. In the **Domain wide delegation** pane, select **Manage Domain Wide Delegation**.
3. Click **Add new**.
4. In the **Client ID** field, enter the client ID provided by Secyra.
5. In the **OAuth Scopes** field, enter the following scope: `https://www.googleapis.com/auth/admin.directory.user.readonly`
6. Click **Authorize**.

## Additional resources

- [Domain-wide delegation](https://developers.google.com/workspace/cloud-search/docs/guides/delegation) (Google Workspace)
