---
title: Secyra (2025) | Microcopy
---

<span class="cs-page-kicker">Case studies > Secyra (2025) > Microcopy for alert</span>

# Missing Google OAuth 2.0 scopes

## Description

**InsightEdge-role** lacks the Google OAuth 2.0 scopes that data scanning requires. The InsightEdge Platform cannot reach some data sources. Scan coverage may be incomplete.

## Remediation

1. Open the Google Admin console.
2. Go to **Main menu ☰** > **Security** > **Access and data control** > **API controls**.
3. In the **Domain wide delegation** pane, select **Manage Domain Wide Delegation**.
4. Click **Add new**.
5. In the **Client ID** field, enter the client ID from Secyra.
6. In the **OAuth Scopes** field, enter this scope: `https://www.googleapis.com/auth/admin.directory.user.readonly`
7. Click **Authorize**.

## Additional resources

- [Domain-wide delegation](https://developers.google.com/workspace/cloud-search/docs/guides/delegation) (Google Workspace)
