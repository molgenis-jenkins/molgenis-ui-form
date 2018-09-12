const metadata = {
  'href': '/api/v2/it_emx_datatypes_TypeTest',
  'hrefCollection': '/api/v2/it_emx_datatypes_TypeTest',
  'name': 'it_emx_datatypes_TypeTest',
  'label': 'TypeTest',
  'description': 'MOLGENIS Data types test entity',
  'attributes': [
    {
      'attributes': [],
      'auto': true,
      'description': 'automatically generated internal id, only for internal use.',
      'fieldType': 'STRING',
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/id',
      'isAggregatable': false,
      'label': 'id',
      'labelAttribute': false,
      'lookupAttribute': false,
      'maxLength': 255,
      'name': 'id',
      'nillable': false,
      'readOnly': true,
      'unique': true,
      'visible': false
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/string',
      'fieldType': 'STRING',
      'name': 'string',
      'label': 'String Field',
      'attributes': [],
      'auto': false,
      'nillable': true,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'visible': true,
      'description': 'STRING description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/text',
      'fieldType': 'TEXT',
      'name': 'text',
      'label': 'Text Field',
      'attributes': [],
      'auto': false,
      'nillable': true,
      'readOnly': false,
      'visible': true,
      'labelAttribute': true,
      'unique': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'TEXT description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/boolean',
      'fieldType': 'BOOL',
      'name': 'boolean',
      'label': 'Boolean Field',
      'attributes': [],
      'auto': false,
      'nillable': true,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'Boolean description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/integer',
      'fieldType': 'INT',
      'name': 'integer',
      'label': 'Integer Field',
      'attributes': [],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'Integer description',
      'range': {
        'min': 1,
        'max': 45
      }
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/long',
      'fieldType': 'LONG',
      'name': 'long',
      'label': 'Long Field',
      'attributes': [],
      'auto': false,
      'nillable': true,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'Long description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/decimal',
      'fieldType': 'DECIMAL',
      'name': 'decimal',
      'label': 'Decimal Field',
      'attributes': [],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'Decimal description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/html',
      'fieldType': 'HTML',
      'name': 'html',
      'label': 'HTML Field',
      'attributes': [],
      'auto': false,
      'nillable': true,
      'readOnly': true,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'HTML description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/python_script',
      'fieldType': 'SCRIPT',
      'name': 'python_script',
      'label': 'Python script Field',
      'attributes': [],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'Script description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/javascript_script',
      'fieldType': 'SCRIPT',
      'name': 'javascript_script',
      'label': 'Javascript script Field',
      'attributes': [],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'Script description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/hyperlink',
      'fieldType': 'HYPERLINK',
      'name': 'hyperlink',
      'label': 'Hyperlink Field',
      'attributes': [],
      'auto': false,
      'nillable': true,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'HYPERLINK description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/email',
      'fieldType': 'EMAIL',
      'name': 'email',
      'label': 'EMAIL Field',
      'attributes': [],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'EMAIL description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/enum',
      'fieldType': 'ENUM',
      'name': 'enum',
      'label': 'ENUM Field',
      'enumOptions': [
        'enum1',
        'enum2',
        'enum3'
      ],
      'attributes': [],
      'auto': false,
      'nillable': true,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'ENUM description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/date',
      'fieldType': 'DATE',
      'name': 'date',
      'label': 'DATE Field',
      'attributes': [],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'DATE description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/date_nillable',
      'fieldType': 'DATE',
      'name': 'nillable_date',
      'label': 'Nillable DATE Field',
      'attributes': [],
      'auto': false,
      'nillable': true,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'Nillable DATE description',
      'validationExpression': '$("nillable_date").age().value() == null || ($("nillable_date").age().value() >= 0 && $("nillable_date").age().value() < 150)'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/date_time',
      'fieldType': 'DATE_TIME',
      'name': 'date_time',
      'label': 'DATE_TIME Field',
      'attributes': [],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'DATE_TIME description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/date_time',
      'fieldType': 'DATE_TIME',
      'name': 'date_time_nillable',
      'label': 'DATE_TIME Field nillable',
      'attributes': [],
      'auto': false,
      'nillable': true,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'Nillable DATE_TIME description'
    },
    {
      'href': '/api/v1/it_emx_datatypes_TypeTest/meta/categorical',
      'fieldType': 'CATEGORICAL',
      'name': 'categorical',
      'label': 'CATEGORICAL Field',
      'description': 'CATEGORICAL description',
      'attributes': [],
      'enumOptions': [],
      'refEntity': {
        'href': '/api/v1/it_emx_datatypes_TypeTestRef/meta',
        'hrefCollection': '/api/v1/it_emx_datatypes_TypeTestRef',
        'idAttribute': 'value',
        'labelAttribute': 'label',
        'languageCode': 'en',
        'writable': true
      },
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'defaultValue': 'ref1',
      'labelAttribute': false,
      'unique': false,
      'visible': true,
      'lookupAttribute': false,
      'isAggregatable': false,
      'categoricalOptions': [
        {
          'id': 'ref1',
          'label': 'label1'
        },
        {
          'id': 'ref2',
          'label': 'label2'
        },
        {
          'id': 'ref3',
          'label': 'label3'
        },
        {
          'id': 'ref4',
          'label': 'label4'
        },
        {
          'id': 'ref5',
          'label': 'label5'
        }
      ]
    },
    {
      'href': '/api/v1/it_emx_datatypes_TypeTest/meta/categorical_mref',
      'fieldType': 'CATEGORICAL_MREF',
      'name': 'categorical_mref',
      'label': 'CATEGORICAL_MREF Field',
      'description': 'CATEGORICAL_MREF description',
      'attributes': [],
      'enumOptions': [],
      'refEntity': {
        'href': '/api/v1/it_emx_datatypes_TypeTestRef/meta',
        'hrefCollection': '/api/v1/it_emx_datatypes_TypeTestRef',
        'idAttribute': 'value',
        'languageCode': 'en',
        'writable': true
      },
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'defaultValue': 'ref1',
      'labelAttribute': false,
      'unique': false,
      'visible': true,
      'lookupAttribute': false,
      'isAggregatable': false,
      'categoricalOptions': [
        {
          'id': 'ref1',
          'label': 'label1'
        },
        {
          'id': 'ref2',
          'label': 'label2'
        },
        {
          'id': 'ref3',
          'label': 'label3'
        },
        {
          'id': 'ref4',
          'label': 'label4'
        },
        {
          'id': 'ref5',
          'label': 'label5'
        }
      ]
    },
    {
      'href': '/api/v1/it_emx_datatypes_TypeTest/meta/xref',
      'fieldType': 'XREF',
      'name': 'xref',
      'label': 'XREF Field',
      'description': 'XREF description',
      'attributes': [],
      'enumOptions': [],
      'refEntity': {
        'href': '/api/v1/it_emx_datatypes_TypeTestRef/meta',
        'hrefCollection': '/api/v1/it_emx_datatypes_TypeTestRef',
        'idAttribute': 'value',
        'labelAttribute': 'label',
        'languageCode': 'en',
        'writable': true
      },
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'defaultValue': 'ref1',
      'labelAttribute': false,
      'unique': false,
      'visible': true,
      'lookupAttribute': false,
      'isAggregatable': false
    },
    {
      'href': '/api/v1/it_emx_datatypes_TypeTest/meta/mref',
      'fieldType': 'MREF',
      'name': 'mref',
      'label': 'MREF Field',
      'description': 'MREF description',
      'attributes': [],
      'enumOptions': [],
      'refEntity': {
        'href': '/api/v1/it_emx_datatypes_TypeTestRef/meta',
        'hrefCollection': '/api/v1/it_emx_datatypes_TypeTestRef',
        'idAttribute': 'value',
        'labelAttribute': 'label',
        'languageCode': 'en',
        'writable': true
      },
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'defaultValue': 'ref1',
      'labelAttribute': false,
      'unique': false,
      'visible': true,
      'lookupAttribute': false,
      'isAggregatable': false
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/file',
      'fieldType': 'FILE',
      'name': 'file',
      'label': 'FILE Field',
      'attributes': [],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'FILE description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound',
      'fieldType': 'COMPOUND',
      'name': 'compound-field',
      'label': 'Compound field',
      'description': 'Compound description',
      'attributes': [
        {
          'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound_int',
          'fieldType': 'INT',
          'name': 'compound-int',
          'label': 'Compound integer field',
          'attributes': [],
          'auto': false,
          'nillable': false,
          'readOnly': false,
          'defaultValue': '1',
          'labelAttribute': false,
          'unique': false,
          'visible': true,
          'lookupAttribute': false,
          'isAggregatable': true,
          'description': 'Cool Integer child description'
        },
        {
          'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound',
          'fieldType': 'COMPOUND',
          'name': 'nested-compound-field',
          'label': 'Nested Compound field',
          'description': 'Nested Compound description',
          'attributes': [
            {
              'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound_int',
              'fieldType': 'ENUM',
              'name': 'nested-compound-enum',
              'label': 'An enum, inside a compound, inside a compound',
              'attributes': [],
              'enumOptions': ['enum1', 'enum2', 'enum3'],
              'auto': false,
              'nillable': true,
              'readOnly': false,
              'defaultValue': '1',
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': true,
              'description': 'Cool Nested enumceptions'
            },
            {
              'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound_string',
              'fieldType': 'STRING',
              'name': 'nested-compound-string',
              'label': 'Nested Compound string field',
              'description': 'TypeTest compound string attribute',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'defaultValue': 'xcompound_string',
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': true
            },
            {
              'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound_string',
              'fieldType': 'LONG',
              'name': 'nested-compound-long',
              'label': 'Nested Compound Long field',
              'description': 'TypeTest compound long attribute',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': true
            }
          ],
          'auto': false,
          'nillable': false,
          'readOnly': false,
          'labelAttribute': false,
          'unique': false,
          'visible': true,
          'lookupAttribute': false,
          'isAggregatable': false
        },
        {
          'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound_string',
          'fieldType': 'STRING',
          'name': 'compound-string',
          'label': 'Compound string field',
          'description': 'TypeTest compound string attribute',
          'attributes': [],
          'maxLength': 255,
          'auto': false,
          'nillable': false,
          'readOnly': false,
          'defaultValue': 'xcompound_string',
          'labelAttribute': false,
          'unique': false,
          'lookupAttribute': false,
          'isAggregatable': true,
          'visibleExpression': '$("nested-compound-string").value() === "show"',
          'nullableExpression': '$("compound-int").value() !== "1"',
          'validationExpression': '$("compound-string").value() === "valid"'
        },
        {
          'href': '/api/v2/sys_md_EntityType/meta/attributes',
          'fieldType': 'ONE_TO_MANY',
          'name': 'one_to_many',
          'label': 'One to many Field',
          'attributes': [],
          'refEntity': {
            'href': '/api/v1/it_emx_datatypes_TypeTestRef/meta',
            'hrefCollection': '/api/v1/it_emx_datatypes_TypeTestRef',
            'name': 'sys_md_Attribute',
            'label': 'Attribute',
            'description': 'Meta data for attributes',
            'attributes': [
              {
                'href': '/api/v2/sys_md_Attribute/meta/id',
                'fieldType': 'STRING',
                'name': 'id',
                'label': 'Identifier',
                'attributes': [],
                'maxLength': 255,
                'auto': true,
                'nillable': false,
                'readOnly': true,
                'labelAttribute': false,
                'unique': true,
                'visible': false,
                'lookupAttribute': false,
                'isAggregatable': false
              },
              {
                'href': '/api/v2/sys_md_Attribute/meta/name',
                'fieldType': 'STRING',
                'name': 'name',
                'label': 'Name',
                'attributes': [],
                'maxLength': 255,
                'auto': false,
                'nillable': false,
                'readOnly': true,
                'labelAttribute': true,
                'unique': false,
                'visible': true,
                'lookupAttribute': true,
                'isAggregatable': false
              }
            ],
            'labelAttribute': 'label',
            'idAttribute': 'value',
            'lookupAttributes': [
              'name',
              'label'
            ],
            'isAbstract': false,
            'writable': true,
            'languageCode': 'en'
          },
          'mappedBy': 'entity',
          'auto': false,
          'nillable': true,
          'readOnly': false,
          'labelAttribute': false,
          'unique': false,
          'visible': true,
          'lookupAttribute': false,
          'isAggregatable': false,
          'description': 'This is a one to many. It is a readonly multi select'
        }
      ],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': false,
      'unique': false,
      'visible': true,
      'lookupAttribute': false,
      'isAggregatable': false
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound',
      'fieldType': 'COMPOUND',
      'name': 'hidden-compound',
      'label': 'Hidden compound field',
      'description': 'Hidden Compound description',
      'attributes': [
        {
          'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound_int',
          'fieldType': 'STRING',
          'name': 'hidden-compound-child',
          'label': 'Hidden compound string field',
          'attributes': [],
          'auto': false,
          'nillable': false,
          'readOnly': false,
          'defaultValue': '1',
          'labelAttribute': false,
          'unique': false,
          'visible': false,
          'lookupAttribute': false,
          'isAggregatable': true,
          'description': 'Cool Integer child description'
        },
        {
          'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound_int',
          'fieldType': 'COMPOUND',
          'name': 'nested-hidden-compound',
          'label': 'Nested Hidden compound',
          'attributes': [
            {
              'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound_int',
              'fieldType': 'STRING',
              'name': 'nested-hidden-compound-child',
              'label': 'Hidden compound string field',
              'attributes': [],
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'defaultValue': '1',
              'labelAttribute': false,
              'unique': false,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': true,
              'description': 'Cool Integer child description'
            }
          ],
          'auto': false,
          'nillable': false,
          'readOnly': false,
          'defaultValue': '1',
          'labelAttribute': false,
          'unique': false,
          'visible': true,
          'lookupAttribute': false,
          'isAggregatable': true,
          'description': 'Cool Hidden nested compound'
        }
      ],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': false,
      'unique': false,
      'visible': true,
      'lookupAttribute': false,
      'isAggregatable': false
    }
  ]
}

const items = {
  string: 'string value',
  text: 'text value',
  hyperlink: 'www.nu.nl',
  boolean: true,
  nillable_date: '2017-09-06',
  categorical: {href: 'url', value: 'ref1', label: 'label1'},
  categorical_mref: [
    {href: 'url', value: 'ref1', label: 'label1'},
    {href: 'url', value: 'ref2', label: 'label2'}
  ],
  xref: {href: 'url', value: 'ref1', label: 'label1'},
  mref: [
    {href: 'url', value: 'ref1', label: 'label1'},
    {href: 'url', value: 'ref2', label: 'label2'},
    {href: 'url', value: 'ref3', label: 'label3'}
  ],
  one_to_many: [
    {href: 'url', value: 'ref1', label: 'label1'},
    {href: 'url', value: 'ref2', label: 'label2'}
  ],
  enum: 'enum2',
  html: '<h1>test</h1>',
  python_script: 'def greet(name):\n\tprint "Hello", name\ngreet("Jack")\ngreet("Jill")\ngreet("Bob")',
  javascript_script: 'var price1 = 5;\nvar price2 = 6;\nvar total = price1 + price2;\ndocument.getElementById("demo").innerHTML ="The total is: " + total;'
}

export default {
  metadata, items
}
