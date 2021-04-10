export const dataRoleTree = {
  name: "R", // ROOT is needed
  children: [
    {
      // ROLE
      name: "orchestrator", // Todo: shorten names somehow? -> the tree will be messy with long names
      attributes: {
        type: "Role",
      },
      children: [
        {
          // SCOPE
          name: "super:admins",
          attributes: {
            type: "Scope",
          },
          children: [
            {
              // RESOURCE
              name: "/api/**",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/ims/*",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/crm/*",
              children: [
                {
                  name: "client1",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
          ],
        },
        {
          // SCOPE
          name: "normal:people",
          attributes: {
            type: "Scope",
          },
          children: [
            {
              // RESOURCE
              name: "/api/**",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/ims/*",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/crm/*",
              children: [
                {
                  name: "client1",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
          ],
        },
        {
          // SCOPE
          name: "robots:and:ai",
          attributes: {
            type: "Scope",
          },
          children: [
            {
              // RESOURCE
              name: "/api/**",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/ims/*",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/crm/*",
              children: [
                {
                  name: "client1",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      // ROLE
      name: "dashboard", // Todo: shorten names somehow? -> the tree will be messy with long names
      attributes: {
        type: "Role",
      },
      children: [
        {
          // SCOPE
          name: "super:admins",
          attributes: {
            type: "Scope",
          },
          children: [
            {
              // RESOURCE
              name: "/api/**",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/ims/*",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/crm/*",
              children: [
                {
                  name: "client1",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
          ],
        },
        {
          // SCOPE
          name: "customers:extern",
          attributes: {
            type: "Scope",
          },
          children: [
            {
              // RESOURCE
              name: "/api/**",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/ims/*",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/crm/*",
              children: [
                {
                  name: "client1",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
          ],
        },
        {
          // SCOPE
          name: "customers:intern",
          attributes: {
            type: "Scope",
          },
          children: [
            {
              // RESOURCE
              name: "/api/**",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/ims/*",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/crm/*",
              children: [
                {
                  name: "client1",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      // ROLE
      name: "monitoring", // Todo: shorten names somehow? -> the tree will be messy with long names
      attributes: {
        type: "Role",
      },
      children: [
        {
          // SCOPE
          name: "super:admins",
          attributes: {
            type: "Scope",
          },
          children: [
            {
              // RESOURCE
              name: "/api/**",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/ims/*",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/crm/*",
              children: [
                {
                  name: "client1",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      // ROLE
      name: "super control panel plus plus", // Todo: shorten names somehow? -> the tree will be messy with long names
      attributes: {
        type: "Role",
      },
      children: [
        {
          // SCOPE
          name: "super:admins",
          attributes: {
            type: "Scope",
          },
          children: [
            {
              // RESOURCE
              name: "/api/**",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/ims/*",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/crm/*",
              children: [
                {
                  name: "client1",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      // ROLE
      name: "crm", // Todo: shorten names somehow? -> the tree will be messy with long names
      attributes: {
        type: "Role",
      },
      children: [
        {
          // SCOPE
          name: "super:admins",
          attributes: {
            type: "Scope",
          },
          children: [
            {
              // RESOURCE
              name: "/api/**",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "crm",
                  attributes: {
                    action: "Delete",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "orchestrator",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/ims/*",
              children: [
                // CLIENT
                {
                  name: "ims",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "ims",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
            {
              name: "/crm/*",
              children: [
                {
                  name: "client1",
                  attributes: {
                    action: "Create",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Read",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Update",
                  },
                },
                {
                  name: "client1",
                  attributes: {
                    action: "Delete",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
