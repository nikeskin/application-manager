
export default function useDocumentation(application) {

    const { documentation } = application;
    const providedDocumentation = [];
    const missingDocumentation = [];

        for (const documentationKey in documentation) {

            const checkedDocumentation = {}
            const key = documentationKey;
            const type = "type";

            switch (key) {
                case "conceptOfRolesAndRights":
                    checkedDocumentation[type] = 1;
                    break;
                case "supplierContract":
                    checkedDocumentation[type] = 2;
                    break;
                case "technicalDesignConcept":
                    checkedDocumentation[type] = 3;
                    break;
                case "testingConcept":
                    checkedDocumentation[type] = 4;
                    break;
                case "userHandbook":
                    checkedDocumentation[type] = 5;
                    break;
                default: checkedDocumentation[type] = 6;
            }

            if (!documentation[documentationKey]) {
                checkedDocumentation[key] = documentation[documentationKey];
                missingDocumentation.push(checkedDocumentation);
            } else {
                checkedDocumentation[key] = documentation[documentationKey];
                providedDocumentation.push(checkedDocumentation);
            }

        }

    const documentationStatus = providedDocumentation.length > 0 ? (providedDocumentation.length / (providedDocumentation.length + missingDocumentation.length)*100) : 0;

    return { missingDocumentation, providedDocumentation, documentationStatus }

}

