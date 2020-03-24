(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{215:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(1),r=a(9),o=(a(0),a(299)),b={id:"swagger-codegen-migration",title:"Migrating from Swagger Codegen"},i={id:"swagger-codegen-migration",title:"Migrating from Swagger Codegen",description:"OpenAPI Generator is a fork of `swagger-codegen` between version `2.3.1` and `2.4.0`. For the reasons behind the fork, please refer to the [Q&A](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/qna.md).",source:"@site/../docs/migration-from-swagger-codegen.md",permalink:"/docs/swagger-codegen-migration",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/migration-from-swagger-codegen.md",lastUpdatedBy:"Sebastien Rosset",lastUpdatedAt:1583860976,sidebar:"docs",previous:{title:"Roadmap",permalink:"/docs/roadmap"},next:{title:"Swagger Codegen Fork: Q&A",permalink:"/docs/fork-qna"}},l=[{value:"New docker images",id:"new-docker-images",children:[]},{value:"New maven coordinates",id:"new-maven-coordinates",children:[]},{value:"Changes in Maven Plugin",id:"changes-in-maven-plugin",children:[]},{value:"New generators names",id:"new-generators-names",children:[]},{value:"New parameters name",id:"new-parameters-name",children:[]},{value:"Renamed Mustache Template Variables",id:"renamed-mustache-template-variables",children:[]},{value:"Ignore file",id:"ignore-file",children:[]},{value:"Metadata folder",id:"metadata-folder",children:[]},{value:"New default values for the generated code",id:"new-default-values-for-the-generated-code",children:[]},{value:"New fully qualified name for the classes",id:"new-fully-qualified-name-for-the-classes",children:[]},{value:"Body parameter name",id:"body-parameter-name",children:[]},{value:"Default basePath",id:"default-basepath",children:[]},{value:"Nullable",id:"nullable",children:[]}],p={rightToc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"OpenAPI Generator is a fork of ",Object(o.b)("inlineCode",{parentName:"p"},"swagger-codegen")," between version ",Object(o.b)("inlineCode",{parentName:"p"},"2.3.1")," and ",Object(o.b)("inlineCode",{parentName:"p"},"2.4.0"),". For the reasons behind the fork, please refer to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/blob/master/docs/qna.md"}),"Q&A"),'.\nThis community-driven version called "OpenAPI Generator" provides similar functionalities and can be used as drop-in replacement.\nThis guide explains the major differences in order to help you with the migration.'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Table of contents")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#new-docker-images"}),"New docker images")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#new-maven-coordinates"}),"New maven coordinates")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#changes-in-maven-plugin"}),"Changes in Maven Plugin")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#new-generators-names"}),"New generators names")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#new-parameters-name"}),"New parameters name")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#renamed-mustache-template-variables"}),"Renamed Mustache Template Variables")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#ignore-file"}),"Ignore file")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#metadata-folder"}),"metadata-folder")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#new-default-values-for-the-generated-code"}),"New default values for the generated code")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#new-fully-qualified-name-for-the-classes"}),"New fully qualified name for the classes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#body-parameter-name"}),"Body parameter name")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#default-basepath"}),"Default basePath")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#nullable"}),"Nullable"))),Object(o.b)("h2",{id:"new-docker-images"},"New docker images"),Object(o.b)("p",null,"The docker images are available on DockerHub: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/u/openapitools/"}),"https://hub.docker.com/u/openapitools/")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CLI for OpenAPI Generator")),Object(o.b)("p",null,"Image to run OpenAPI Generator in the command line (see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/blob/master/README.md#openapi-generator-cli-docker-image"}),"OpenAPI Generator CLI Docker Image"),")"),Object(o.b)("p",null,"Old: ",Object(o.b)("inlineCode",{parentName:"p"},"swaggerapi/swagger-codegen-cli")),Object(o.b)("p",null,"New: ",Object(o.b)("inlineCode",{parentName:"p"},"openapitools/openapi-generator-cli")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"OpenAPI Generator as web service")),Object(o.b)("p",null,"Image to run OpenAPI Generator as a web service (see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/blob/master/README.md#openapi-generator-online-docker-image"}),"OpenAPI Generator Online Docker Image"),")"),Object(o.b)("p",null,"Old: ",Object(o.b)("inlineCode",{parentName:"p"},"swaggerapi/swagger-generator")),Object(o.b)("p",null,"New: ",Object(o.b)("inlineCode",{parentName:"p"},"openapitools/openapi-generator-online")),Object(o.b)("h2",{id:"new-maven-coordinates"},"New maven coordinates"),Object(o.b)("p",null,"You can find our released artefact on maven central:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Core:")),Object(o.b)("p",null,"Old:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>io.swagger</groupId>\n    <artifactId>swagger-codegen</artifactId>\n</dependency>\n")),Object(o.b)("p",null,"New:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.openapitools</groupId>\n    <artifactId>openapi-generator</artifactId>\n</dependency>\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Cli:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>io.swagger</groupId>\n    <artifactId>swagger-codegen-cli</artifactId>\n</dependency>\n")),Object(o.b)("p",null,"New:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.openapitools</groupId>\n    <artifactId>openapi-generator-cli</artifactId>\n</dependency>\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Maven plugin:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>io.swagger</groupId>\n    <artifactId>swagger-codegen-maven-plugin</artifactId>\n</dependency>\n")),Object(o.b)("p",null,"New:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.openapitools</groupId>\n    <artifactId>openapi-generator-maven-plugin</artifactId>\n</dependency>\n")),Object(o.b)("h2",{id:"changes-in-maven-plugin"},"Changes in Maven Plugin"),Object(o.b)("p",null,"OpenAPI Generator 3.0.0 has introduced ",Object(o.b)("inlineCode",{parentName:"p"},"<generatorName>")," and deprecated ",Object(o.b)("inlineCode",{parentName:"p"},"<language>"),', because this refers to generator names which embed more than just "language".'),Object(o.b)("p",null,"If both options are present, you'll be presented with an error. If only ",Object(o.b)("inlineCode",{parentName:"p"},"<language>")," is provided, you'll be presented instructions for updating to the new config."),Object(o.b)("h2",{id:"new-generators-names"},"New generators names"),Object(o.b)("p",null,"When you run OpenAPI Generator, you need to select a target generator (",Object(o.b)("inlineCode",{parentName:"p"},"-g")," option in the cli).\nAll languages of ",Object(o.b)("inlineCode",{parentName:"p"},"swagger-codegen")," have been migrated to ",Object(o.b)("inlineCode",{parentName:"p"},"openapi-generator"),", but some names were changed, in order to be more consistent."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name in ",Object(o.b)("inlineCode",{parentName:"th"},"swagger-codegen")),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name in ",Object(o.b)("inlineCode",{parentName:"th"},"openapi-generator")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"akka-scala")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"scala-akka"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"scala")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"scala-httpclient"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"jaxrs")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"jaxrs-jersey"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"qt5cpp")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"cpp-qt5"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"cpprest")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"cpp-restsdk"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"tizen")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"cpp-tizen"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"sinatra")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"ruby-sinatra"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"swift")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"swift2-deprecated"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"lumen")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"php-lumen"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"slim")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"php-slim"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"ze-ph")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"php-ze-ph"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"nancyfx")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"csharp-nancyfx"))))),Object(o.b)("p",null,"We provide a temporary mapping in code for these old values. You'll receive a warning with instructions to migrate to the new names."),Object(o.b)("h2",{id:"new-parameters-name"},"New parameters name"),Object(o.b)("p",null,'Some parameters were renamed.\nOften you need to replace "Swagger", with "OpenAPI".\nSome examples:'),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name in ",Object(o.b)("inlineCode",{parentName:"th"},"swagger-codegen")),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name in ",Object(o.b)("inlineCode",{parentName:"th"},"openapi-generator")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"debugSwagger")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"debugOpenAPI"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"GenerateSwaggerMetadata")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"GenerateOpenAPIMetadata"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"swagger.codegen.undertow.apipackage")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"openapi.codegen.undertow.apipackage"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"swagger.codegen.undertow.modelpackage")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"openapi.codegen.undertow.modelpackage"))))),Object(o.b)("h2",{id:"renamed-mustache-template-variables"},"Renamed Mustache Template Variables"),Object(o.b)("p",null,"The template variable ",Object(o.b)("inlineCode",{parentName:"p"},"{{datatype}}")," was renamed to ",Object(o.b)("inlineCode",{parentName:"p"},"{{dataType}}")," for consistency reason.\nCorresponding java code: ",Object(o.b)("inlineCode",{parentName:"p"},"CodegenProperty.datatype")," is renamed to ",Object(o.b)("inlineCode",{parentName:"p"},"CodegenProperty.dataType"),"."),Object(o.b)("p",null,"(If you're ",Object(o.b)("strong",{parentName:"p"},"not")," using customized templates with the ",Object(o.b)("inlineCode",{parentName:"p"},"-t")," option, you can ignore the mustache variable renaming above.)"),Object(o.b)("h2",{id:"ignore-file"},"Ignore file"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},".swagger-codegen-ignore")," is replaced by ",Object(o.b)("inlineCode",{parentName:"p"},".openapi-generator-ignore"),".\nThe syntax inside the file stays the same."),Object(o.b)("p",null,"You don't need to rename the file manually, OpenAPI Generator will do it when your run it against an existing output directory.\n(When there is no ",Object(o.b)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," in a folder, if a ",Object(o.b)("inlineCode",{parentName:"p"},".swagger-codegen-ignore")," file is present it will be considered and renamed to ",Object(o.b)("inlineCode",{parentName:"p"},".openapi-generator-ignore"),")."),Object(o.b)("h2",{id:"metadata-folder"},"Metadata folder"),Object(o.b)("p",null,"The metatata folder (to store the ",Object(o.b)("inlineCode",{parentName:"p"},"VERSION")," file for example) is now called ",Object(o.b)("inlineCode",{parentName:"p"},".openapi-generator/")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},".swagger-codegen/"),"."),Object(o.b)("h2",{id:"new-default-values-for-the-generated-code"},"New default values for the generated code"),Object(o.b)("p",null,"If you use a generator without specifying each parameter, you might see some differences in the generated code.\nAs example the default package name used in the generated code has changed.\nYou need to have a look at the specific value, depending of your target language, but often ",Object(o.b)("inlineCode",{parentName:"p"},"Swagger")," \xees replaced by ",Object(o.b)("inlineCode",{parentName:"p"},"OpenAPITools")," and ",Object(o.b)("inlineCode",{parentName:"p"},"io.swagger")," is replaced by ",Object(o.b)("inlineCode",{parentName:"p"},"org.openapitools"),".\nConcretely if you did not specify anything when you are generating java code, a file ",Object(o.b)("inlineCode",{parentName:"p"},"org/openapitools/api/PetApi.java"),"  might be generated instead of ",Object(o.b)("inlineCode",{parentName:"p"},"io/swagger/api/PetApi.java"),"."),Object(o.b)("p",null,"If this is a problem for you, you need to explicitly set the the parameter value in order to match with the ",Object(o.b)("inlineCode",{parentName:"p"},"swagger-codgen")," default value (",Object(o.b)("inlineCode",{parentName:"p"},"apiPackage")," == ",Object(o.b)("inlineCode",{parentName:"p"},"io.swagger")," in the previous example with the java generator)."),Object(o.b)("h2",{id:"new-fully-qualified-name-for-the-classes"},"New fully qualified name for the classes"),Object(o.b)("p",null,"If you have extended some generators in your project, and you are looking for a specific class, replace the ",Object(o.b)("inlineCode",{parentName:"p"},"io.swagger.codegen")," package (old name) with ",Object(o.b)("inlineCode",{parentName:"p"},"org.openapitools.codegen")," package (new name)."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"org.openapitools.codegen.DefaultGenerator")),Object(o.b)("h2",{id:"body-parameter-name"},"Body parameter name"),Object(o.b)("p",null,"\u203c\ufe0f Since 4.0.0-beta, the body parameter name in OAS v2 is automatically preserved in the vendor extension ",Object(o.b)("inlineCode",{parentName:"p"},"x-codegen-request-body-name")),Object(o.b)("p",null,"In OpenAPI spec v3, there's no body parameter, which is replaced by ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#request-body-object"}),"Request Body Object"),'. The parameter name for Request Body is named automatically based on the model name (e.g. User). To control how the "Request Body" parameter is named, please add the vendor extension ',Object(o.b)("inlineCode",{parentName:"p"},"x-codegen-request-body-name")," to the operation:"),Object(o.b)("p",null,"OpenAPI Spec v3:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"paths:\n  /pet:\n    post:\n      tags:\n        - pet\n      summary: Add a new pet to the store\n      description: ''\n      operationId: addPet\n      x-codegen-request-body-name: new_body_name\n      responses:\n        '405':\n          description: Invalid input\n      security:\n        - petstore_auth:\n            - 'write:pets'\n            - 'read:pets'\n      requestBody:\n        $ref: '#/components/requestBodies/Pet'\n")),Object(o.b)("p",null,"OpenAPI Spec v2:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"paths:\n  /pet:\n    post:\n      tags:\n        - pet\n      summary: Add a new pet to the store\n      description: ''\n      operationId: addPet\n      x-codegen-request-body-name: new_body_name\n      consumes:\n        - application/json\n        - application/xml\n      produces:\n        - application/xml\n        - application/json\n      parameters:\n        - in: body\n          name: body\n          description: Pet object that needs to be added to the store\n          required: true\n          schema:\n            $ref: '#/definitions/Pet'\n      responses:\n        '405':\n          description: Invalid input\n      security:\n        - petstore_auth:\n            - 'write:pets'\n            - 'read:pets'\n")),Object(o.b)("p",null,"If your API client is using named parameters in the function call (e.g. Perl required & optional parameters, Ruby optional parameters), you will need to add ",Object(o.b)("inlineCode",{parentName:"p"},"x-codegen-request-body-name")," to the spec to restore the original body parameter name."),Object(o.b)("h2",{id:"default-basepath"},"Default basePath"),Object(o.b)("p",null,"The default ",Object(o.b)("inlineCode",{parentName:"p"},"basePath")," has been changed from ",Object(o.b)("inlineCode",{parentName:"p"},"https://localhost")," to ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost")," (http without s)"),Object(o.b)("h2",{id:"nullable"},"Nullable"),Object(o.b)("p",null,"OpenAPI spec v3 has better support for ",Object(o.b)("inlineCode",{parentName:"p"},"nullable"),". If you're still using OpenAPI/Swagger spec v2, please use ",Object(o.b)("inlineCode",{parentName:"p"},"x-nullable: true")," instead."))}c.isMDXComponent=!0},299:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},d=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,b=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),s=n,O=d["".concat(b,".").concat(s)]||d[s]||m[s]||o;return a?r.a.createElement(O,i({ref:t},p,{components:a})):r.a.createElement(O,i({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,b=new Array(o);b[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var p=2;p<o;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);